import React from "react"

import Navbar from "../../molecules/Navbar"
import randomLogo from "../../../shared/images/random-logo-recortado.png"

function Header() {
  return (
    <header className="w-screen h-[70px] bg-semi-white fixed drop-shadow-lg z-50 flex justify-between">
      <img className="h-full rounded-md" src={randomLogo} alt="random logo" />
      <Navbar />
    </header>
  )
}

export default Header
