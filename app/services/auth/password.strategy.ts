import { AuthorizationError } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'
import { UserSession } from './auth.types'
import { api } from '../../lib/api.server'

export const passwordStrategy = new FormStrategy<UserSession>(async ({ context }) => {
  const { email, password } = (context?.data as { email: string; password: string }) || {}

  if (!email || !password) {
    throw new AuthorizationError('Missing credentials')
  }

  // validate user against user service
  const { data } = await api.post('/auth/login', { email, password })

  if (!data || !data.success || !data.data.isActive) {
    throw new AuthorizationError('Invalid credentials')
  }

  // return the session
  return {
    id: data.data.id,
    email: data.data.email,
    firstName: data.data.firstName,
    lastName: data.data.lastName,
    avatarUrl: data.data.profilePictureUrl,
    role: data.data.role,
    token: data.data.token,
    // lop: user.lop,
    // state: user.state !== UserState.NORMAL ? user.state : undefined,
    // expiresAt: Date.now() + 60 * 1000,
    // updatedAt: user.updatedAt,
    // token: encryptMD5(`${user.key}-${new Date().getTime()}`),
  }
})
