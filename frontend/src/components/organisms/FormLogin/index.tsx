import React, { useState } from "react"

import { Link } from "react-router-dom"
import PasswordField from "../../molecules/PasswordField"
import UsernameField from "../../molecules/UsernameField"

function FormLogin() {
  const [username, setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  return (
    <div className="h-[70%]">
      <form className="w-[450px] h-full flex flex-col justify-around items-center bg-white  rounded-xl p-4">
        <h1 className="text-5xl">Login</h1>
        <UsernameField setUsername={setUsername} username={username} />
        <PasswordField
          password={password}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          setPassword={setPassword}
        />
        <Link
          to="/dashboard"
          className="text-xl text-semi-white rounded-lg w-3/5 p-2 bg-black-not-strong"
        >
          <button
            className=" w-full text-center"
            type="submit"
            onSubmit={(event) => event?.preventDefault()}
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  )
}

export default FormLogin
