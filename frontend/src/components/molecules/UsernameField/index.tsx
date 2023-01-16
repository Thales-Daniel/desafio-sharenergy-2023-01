import React from "react"
import { BiUser } from "react-icons/bi"
import { usernameFieldTypes } from "../../../shared/types/PagePropsTypes/usernameFieldTypes"

function UsernameField({ setUsername, username }: usernameFieldTypes) {
  return (
    <label className="w-4/5 relative" htmlFor="username">
      <p className="text-[22px]">Username</p>
      <input
        id="username"
        value={username}
        placeholder="Username"
        className="input-login"
        type="text"
        onChange={({ target }) => setUsername(target.value)}
      />
      <span className="absolute bottom-[10px] left-2">
        <BiUser />
      </span>
    </label>
  )
}

export default UsernameField
