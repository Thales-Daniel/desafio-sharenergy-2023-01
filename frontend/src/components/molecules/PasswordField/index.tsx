import React from "react"

import { GiPadlock, GiPadlockOpen } from "react-icons/gi"
import { PasswordFieldTypes } from "../../../shared/types/PagePropsTypes/passwordFieldTypes"

function PasswordField({
  showPassword,
  setShowPassword,
  setPassword,
  password,
}: PasswordFieldTypes) {
  return (
    <label htmlFor="password" className="w-4/5 relative">
      <p className="text-[22px]">Password</p>
      <input
        id="password"
        placeholder="**********"
        value={password}
        type={showPassword ? "text" : "password"}
        className="input-login"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button
        type="button"
        className="absolute bottom-[4px] left-2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? <GiPadlock /> : <GiPadlockOpen />}
      </button>
    </label>
  )
}

export default PasswordField
