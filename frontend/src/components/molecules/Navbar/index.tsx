/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react"
import { SlLogout } from "react-icons/sl"
import {
  AiTwotoneHome,
  AiOutlineUsergroupAdd,
  AiOutlineClose,
} from "react-icons/ai"
import { SiDatadog } from "react-icons/si"
import { GiHamburgerMenu, GiCat } from "react-icons/gi"
import { Link } from "react-router-dom"

import { AuthContext } from "../../../contexts/AuthContext"

function Navbar() {
  const { signout } = useContext(AuthContext)
  const [close, setClose] = useState(false)

  const handleLogout = () => {
    signout()
  }

  return (
    <div className="flex px-4 justify-between items-center h-full">
      <nav className="hidden items-center w-full sm:flex">
        <button
          type="button"
          className="cursor-pointer text-semi-white text-3xl"
          onClick={() => setClose(!close)}
        >
          {close === false ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
        {close === true ? (
          <div className="bg-white h-[330px] absolute top-[91px] right-0 text-black-not-strong rounded-b-md">
            <Link className="link-navbar" to="/dashboard">
              <AiTwotoneHome />
              Home
            </Link>
            <Link className="link-navbar" to="/httpCats">
              <GiCat />
              Http Cats
            </Link>
            <Link className="link-navbar" to="/dogs">
              <SiDatadog />
              Dogs
            </Link>
            <Link className="link-navbar" to="/clients">
              <AiOutlineUsergroupAdd />
              Clients
            </Link>
            <Link className="link-navbar" onClick={handleLogout} to="/">
              <SlLogout className="text-[20px] mr-2" />
              Sing Out
            </Link>
          </div>
        ) : null}
      </nav>
      <nav className="flex items-center w-full sm:hidden text-semi-white">
        <Link className="link-navbar" to="/dashboard">
          <AiTwotoneHome />
          Home
        </Link>
        <Link className="link-navbar" to="/httpCats">
          <GiCat />
          Http Cats
        </Link>
        <Link className="link-navbar" to="/dogs">
          <SiDatadog />
          Dogs
        </Link>
        <Link className="link-navbar" to="/clients">
          <AiOutlineUsergroupAdd />
          Clients
        </Link>
        <Link className="link-navbar" onClick={handleLogout} to="/">
          <SlLogout className="text-[20px] mr-2" />
          Sing Out
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
