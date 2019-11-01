import React from "react"

import "./navbar.scss"
import Icons from "../icons"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="option">
        <a href="#services" className="link">
          <Icons name="award" /> Servicios
        </a>
      </div>
      <div className="option">
        <a href="#team" className="link">
          <Icons name="users" /> Equipo
        </a>
      </div>
      <div className="option">
        <a href="#contact" className="link">
          <Icons name="phone" /> Contacto
        </a>
      </div>
    </nav>
  )
}
