import { useMutation } from "@tanstack/react-query"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import randomLogo from "../../../shared/images/random-logo-recortado.png"
import { AuthContext } from "../../../contexts/AuthContext"
import useApi from "../../../hooks/useApi"
import setLocalStorage from "../../../shared/functions/setLocalStorage"
import User from "../../../shared/types/userType"
import ErroComponent from "../../atoms/ErrorComponent"
import RememberButton from "../../atoms/RememberButton"
import PasswordField from "../../molecules/PasswordField"
import UsernameField from "../../molecules/UsernameField"

function FormLogin() {
  const {
    errorMessage,
    setErrorMessage,
    checked,
    setChecked,
    setUserInfor,
    userInfor,
  } = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const api = useApi()

  useEffect(() => {
    if (userInfor.token && userInfor.remember) {
      navigate("/dashboard")
    }
  }, [userInfor])

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: (body: User) => api.signin(body),
    onSuccess: (data) => {
      setLocalStorage("token", data.jwtToken)
      setLocalStorage("remember", checked)
      setUserInfor({ token: data.jwtToken, remember: checked })
      navigate("/dashboard")
    },
    onError: (err: Error) => {
      setErrorMessage(err.toString())
      setTimeout(() => {
        setErrorMessage("")
      }, 3500)
    },
  })

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()
    mutate({ username, password })
  }

  return (
    <div className="h-[70%]">
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="w-[450px] h-full flex flex-col justify-start gap-10 items-center bg-white  rounded-xl p-4"
      >
        <img className="h-44 rounded-md" src={randomLogo} alt="random logo" />

        <UsernameField setUsername={setUsername} username={username} />
        <div className="w-4/5 relative">
          <PasswordField
            password={password}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setPassword={setPassword}
          />
          <RememberButton checked={checked} setChecked={setChecked} />
        </div>
        {errorMessage && <ErroComponent message={errorMessage} />}
        <button
          className="text-xl text-semi-white rounded-lg w-3/5 p-2 bg-black-not-strong text-center"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default FormLogin
