import { useNavigate } from '@remix-run/react'
import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { UserSession } from '~/services/auth/auth.types'

export const SHOW_LOGIN_EVENT = '/sign-in'
export const SHOW_SIGN_UP_EVENT = '/sign-up'

export interface AuthContext {
  user: UserSession | null,
  showLogin(): void,
  showSignUp(): void,
  isLoggedIn: boolean
}

const context = createContext<AuthContext>({} as never)

export interface AuthProviderProps {
  user: UserSession | null
}

export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({ user, children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
   if(!user){
    setIsLoggedIn(false)
   }else{
    setIsLoggedIn(true)
   }
  }, [user])
  

  const showLogin = () => {
    navigate(SHOW_LOGIN_EVENT)
  }

  const showSignUp = () => {
    navigate(SHOW_SIGN_UP_EVENT)
  }

  return <context.Provider value={{ user, isLoggedIn, showLogin, showSignUp }}>{children}</context.Provider>
}

export const useAuth = () => useContext(context)
