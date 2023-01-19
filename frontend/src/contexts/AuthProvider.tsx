import React, { useEffect, useMemo, useState } from "react"

import useApi from "../hooks/useApi"
import { AuthContext } from "./AuthContext"

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [userInfor, setUserInfor] = useState({} as any)
  const api = useApi()

  useEffect(() => {
    const validateToken = async () => {
      const tokenStorage: any = localStorage.getItem("token")
      const rememberStorage: any = localStorage.getItem("remember")
      const myValue = rememberStorage === "true"
      if (tokenStorage && myValue) {
        const data = await api.validateToken(tokenStorage)
        if (data.jwtToken) {
          setUserInfor({ token: data.jwtToken, remember: rememberStorage })
        }
      }
    }

    validateToken()
  }, [])

  const signout = () => {
    setChecked(false)
    setUserInfor({})
    localStorage.clear()
  }

  const context = useMemo(
    () => ({
      checked,
      setChecked,
      setErrorMessage,
      errorMessage,
      signout,
      userInfor,
      setUserInfor,
    }),
    [
      checked,
      setChecked,
      setErrorMessage,
      errorMessage,
      signout,
      userInfor,
      setUserInfor,
    ]
  )

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthProvider
