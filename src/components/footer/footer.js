import React from "react"

import Icons from "../icons"
import useIsMobile from "../../hooks/useIsMobile"
import "./footer.scss"

export const Footer = () => {
  const isMobile = useIsMobile()
  return (
    <footer className="footer">
      {isMobile ? (
        <div className="mobile">
          <a className="link option service-option" href="#services">
            <span className="text">Servicios</span>
            <Icons name="award" />
          </a>
          <a className="link option contact-option" href="#contact">
            <span className="text">Contacto</span>
            <Icons name="calendar" />
          </a>
          <a className="link option team-option" href="#team">
            <span className="text">Equipo</span>
            <Icons name="users" />
          </a>
        </div>
      ) : (
        <div className="credits">
          Construido por{" "}
          <a href="https://enbonnet.me" className="link">
            @enBonnet
          </a>{" "}
          para Salexa Estetica Venezolana en Chile
        </div>
      )}
    </footer>
  )
}
