import React from "react"

import Navbar from "../../molecules/Navbar"

function Header() {
  return (
    <header className="w-screen h-[70px] bg-semi-white fixed drop-shadow-lg">
      <Navbar />
    </header>
  )
}

export default Header
