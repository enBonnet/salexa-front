import React from "react"
import "./footer.scss"
import Icons from "../icons"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="mobile">
        <a className="link option service-option" href="#services">
          <Icons name="awars" />
        </a>
        <a className="link option contact-option" href="#contact">
          <Icons name="calendar" />
        </a>
        <a className="link option team-option" href="#team">
          <Icons name="users" />
        </a>
      </div>
    </footer>
  )
}
