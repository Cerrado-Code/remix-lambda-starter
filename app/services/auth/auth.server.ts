import { Session, redirect } from '@remix-run/node'
import { Authenticator as RemixAuthenticator } from 'remix-auth'

import { sessionStorage } from '../session.server'
import { UserSession } from './auth.types'
import { passwordStrategy } from './password.strategy'
import { API } from '../../lib/api.server'

class Authenticator extends RemixAuthenticator<UserSession> {
  public isAuthenticated(
    request: Request | Session,
    options?: { successRedirect?: never; failureRedirect?: never; headers?: never },
  ): Promise<UserSession | null>
  public isAuthenticated(
    request: Request | Session,
    options: { successRedirect: string; failureRedirect?: never; headers?: HeadersInit },
  ): Promise<null>
  public isAuthenticated(
    request: Request | Session,
    options: { successRedirect?: never; failureRedirect: string; headers?: HeadersInit },
  ): Promise<UserSession>
  public isAuthenticated(
    request: Request | Session,
    options: { successRedirect: string; failureRedirect: string; headers?: HeadersInit },
  ): Promise<null>
  public async isAuthenticated(
    request: Request | Session,
    options?: { successRedirect?: string; failureRedirect?: string; headers?: HeadersInit },
  ): Promise<UserSession | null> {
    const session = await super.isAuthenticated(request, options as never)
    if (!session) {
      return null
    }

    try {
      if (!session.token) {
        return null
      }
      // validate if the user is logged in
      await new API(session.token).get('/user/profile')

      return session
    } catch (error) {
      console.error(error)
      if (options && options.failureRedirect) {
        throw redirect(options.failureRedirect)
      }
      return null
    }
  }
}

// Create an instance of the authenticator
export const auth = new Authenticator(sessionStorage)

auth.use(passwordStrategy, 'password')
