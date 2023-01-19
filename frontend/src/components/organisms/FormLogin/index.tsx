import { useMutation } from "@tanstack/react-query"
import React, { useState } from "react"

import useApi from "../../../hooks/useApi"
import setLocalStorage from "../../../shared/functions/setLocalStorage"
import BodyTypes from "../../../shared/types/bodyTypes"
import ErroComponent from "../../atoms/ErrorComponent"
import RememberButton from "../../atoms/RememberButton"
import PasswordField from "../../molecules/PasswordField"
import UsernameField from "../../molecules/UsernameField"

function FormLogin() {
  const [username, setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const api = useApi()

  const { mutate } = useMutation({
    mutationFn: (body: BodyTypes) => api.signin(body),
    onSuccess: (data) => {
      setLocalStorage("user", { jwt: data.jwt, remember: checked })
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
        className="w-[450px] h-full flex flex-col justify-around items-center bg-white  rounded-xl p-4"
      >
        <h1 className="text-5xl">Login</h1>
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
