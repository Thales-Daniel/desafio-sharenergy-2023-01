import React from "react"

import Navbar from "../../molecules/Navbar"
import randomLogo from "../../../shared/images/random-logo-recortado.png"

function Header() {
  return (
    <header className="w-screen h-[90px] bg-light-blue fixed drop-shadow-lg z-50 flex justify-between items-center px-8">
      <img className="h-20 rounded-md" src={randomLogo} alt="random logo" />
      <Navbar />
    </header>
  )
}

export default Header
