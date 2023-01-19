import React, { useContext } from "react"

import { AuthContext } from "../../../contexts/AuthContext"
import Login from "../../../pages/Login"

export function RequireAuth({ children }: { children: React.ReactNode | any }) {
  const { userInfor } = useContext(AuthContext)

  if (!userInfor.remember && !userInfor.token) {
    return <Login />
  }

  return children
}

export default RequireAuth
