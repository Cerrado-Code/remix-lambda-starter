import { Await, FetcherWithComponents } from '@remix-run/react'
import type { ReactNode } from 'react'
import { Suspense } from 'react'

export interface AwaitedComponentProps<Resolve> {
  resolve: Promise<Resolve> | FetcherWithComponents<Resolve>
  errorElement?: ReactNode
  loadingElement?: ReactNode
  children: ReactNode | ((value: Awaited<Resolve> | Resolve) => ReactNode)
}

export function AwaitedComponent<Resolve>({
  resolve,
  loadingElement = null,
  errorElement = null,
  children,
}: AwaitedComponentProps<Resolve>) {
  if ('data' in resolve) {
    if (resolve.state !== 'idle' || !resolve.data) {
      return loadingElement
    }
    return typeof children === 'function' ? children(resolve.data) : children
  }

  return (
    <Suspense fallback={loadingElement}>
      <Await resolve={resolve} errorElement={errorElement}>
        {children as never}
      </Await>
    </Suspense>
  )
}
