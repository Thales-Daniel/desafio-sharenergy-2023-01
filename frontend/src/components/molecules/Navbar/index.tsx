import React from "react"
import { SlLogout } from "react-icons/sl"
import { AiTwotoneHome } from "react-icons/ai"
import { SiDatadog } from "react-icons/si"
import { GiCat } from "react-icons/gi"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex px-4 justify-between items-center w-full h-full">
      <nav className="flex items-center">
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
      </nav>
      <SlLogout className="text-[20px] mr-2" />
    </div>
  )
}

export default Navbar
