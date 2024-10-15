/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { join } from 'path'
import { auth } from '../services/auth/auth.server'
import { UserSession } from '../services/auth/auth.types'

type DataFunctionArgs = LoaderFunctionArgs | ActionFunctionArgs
type AppData = any

export type WithAPIDataFunctionArgs = DataFunctionArgs & { session: UserSession | null; api: API }
export type WithAPIDataFunction<R = Promise<Response> | Response | Promise<AppData> | AppData> = (
  args: WithAPIDataFunctionArgs,
) => R | Promise<R>

export class ApiError extends Error {
  public status: number
  public statusText: string
  public response: Response
  constructor(message: string, response: Response) {
    super(message)
    this.response = response
    this.status = response.status
    this.statusText = response.statusText
  }
}

export interface Options extends Omit<RequestInit, 'body' | 'headers'> {
  headers?: Record<string, string>
  body?: Record<string, unknown> | FormData
  json?: boolean
  stream?: boolean
  throwsError?: boolean
}

type ApiResponse<T> = {
  data: T
  response: Response
  status: number
}

type StreamResponse = {
  data: null
  response: Response
  status: number
}

const baseUrl = `${typeof process !== 'undefined' ? process.env.API_BASE_URL : ''}`

export class API {
  protected token: string | null = null
  constructor(token: string | null = null) {
    this.token = token
    this.deferred.api = this
  }

  protected async request(route: string, options: Options & { stream: true }): Promise<StreamResponse>
  protected async request<T = any>(route: string, options?: Options): Promise<ApiResponse<T>>
  protected async request<T = any>(
    route: string,
    { body, stream = false, ...options }: Options = {},
  ): Promise<ApiResponse<T> | StreamResponse> {
    const headers: Record<string, string> =
      options.json !== false ? { ...options.headers, 'Content-Type': 'application/json' } : options.headers ?? {}

    headers['Authorization'] = this.token ? `Bearer ${this.token}` : headers['Authorization']

    let response
    try {
      response = await fetch(join(baseUrl, route), {
        body: options.json !== false ? JSON.stringify(body) : (body as never),
        headers,
        ...options,
      })
      if (stream) {
        return { data: null, response, status: response.status }
      }
    } catch (err: any) {
      if (err.message.includes('ECONNREFUSED')) {
        throw new Error('Unable to reach API server')
      }
      throw err
    }
    const status = response.status
    const isJsonResponse = response.headers.get('content-type')?.includes('json')

    // throw error if the status code is non 200/300 only if the throwsError is not false
    if (options?.throwsError !== false && (status < 200 || status >= 400)) {
      const text = await response.text()
      throw new ApiError(text, response)
    }

    const data: T = isJsonResponse ? await response.json() : await response.text()

    return { data, response, status }
  }

  public async get<T = any>(route: string, options?: Options) {
    return this.request<T>(route, options)
  }

  public async put<T = any>(route: string, body: Record<string, unknown> | FormData, options?: Options) {
    return this.request<T>(route, { ...options, method: 'put', body })
  }

  public async post<T = any>(route: string, body: Record<string, unknown> | FormData, options?: Options) {
    return this.request<T>(route, { ...options, method: 'post', body })
  }

  public async delete<T = any>(route: string, body?: Record<string, unknown> | FormData, options?: Options) {
    return this.request<T>(route, { ...options, method: 'delete', body })
  }

  public deferred = {
    api: {} as API,
    async get<T = any>(route: string, options?: Options): Promise<T | null> {
      const response = await this.api.get<T>(route, options)
      return response.data
    },
    async put<T = any>(route: string, body: Record<string, unknown> | FormData, options?: Options): Promise<T | null> {
      const response = await this.api.put<T>(route, body, options)
      return response.data
    },
    async post<T = any>(route: string, body: Record<string, unknown> | FormData, options?: Options): Promise<T | null> {
      const response = await this.api.post<T>(route, body, options)
      return response.data
    },
    async delete<T = any>(route: string, body?: Record<string, unknown> | FormData, options?: Options): Promise<T | null> {
      const response = await this.api.delete<T>(route, body, options)
      return response.data
    },
  }
}

/**
 * @deprecated use `withApi` instead
 */
export default new API()

/**
 * A wrapper for the a loader or action to provide an authenticated API that passes the token to the API request.
 *
 * Usage:
 * ```ts
 * export const loader = withApi(async ({ api }) => { ... })
 * ```
 * _Note: Typings are automatically added to your callback_
 */
export const withApi = <R>(callback: WithAPIDataFunction<R>): WithAPIDataFunction<R> => {
  return async (loaderActionArgs: DataFunctionArgs) => {
    const session = await auth.isAuthenticated(loaderActionArgs.request)
    const api = new API(session?.token)
    return await callback({ ...loaderActionArgs, session, api })
  }
}
