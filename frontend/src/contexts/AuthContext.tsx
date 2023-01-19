import { createContext } from "react"

export type UserInfor = {
  token: string
  remember: boolean
}

export type AuthContextType = {
  checked: boolean
  setChecked: (_checked: boolean) => void
  errorMessage: string
  setErrorMessage: (_errorMessage: string) => void
  signout: () => void
  setUserInfor: (_userInfor: UserInfor) => void
  userInfor: UserInfor
}

export const AuthContext = createContext<AuthContextType>(null!)
