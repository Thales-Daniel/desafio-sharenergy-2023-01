import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <Link to="/httpage">cats</Link>
        <Link to="/dogs">dogs</Link>
        <Link to="/">dash</Link>
      </nav>
    </header>
  )
}

export default Header
