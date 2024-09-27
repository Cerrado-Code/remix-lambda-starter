import { FC, PropsWithChildren, createContext, useContext } from 'react'
import { UserSession } from '~/services/auth/auth.types'

export const SHOW_LOGIN_EVENT = '__auth-show-login'
export const SHOW_SIGN_UP_EVENT = '__auth-show-sign-up'

export interface AuthContext {
  user: UserSession | null
  showLogin(): void
  showSignUp(): void
}

const context = createContext<AuthContext>({} as never)

export interface AuthProviderProps {
  user: UserSession | null
}

export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({ user, children }) => {
  const showLogin = () => {
    window.dispatchEvent(new Event(SHOW_LOGIN_EVENT))
  }

  const showSignUp = () => {
    window.dispatchEvent(new Event(SHOW_SIGN_UP_EVENT))
  }

  return <context.Provider value={{ user, showLogin, showSignUp }}>{children}</context.Provider>
}

export const useAuth = () => useContext(context)
