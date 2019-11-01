import React from "react"

import "./contact.scss"
import Icons from "../icons"

export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="section-title">Contacto</h2>
      <p className="section-message">Reservar tu cita</p>
      <div className="options">
        <div className="option">
          <div className="description">Llamanos</div>
          <a className="link" href="tel:56945228784">
            <Icons name="phone" />
            <span className="info">+56 945228784</span>
          </a>
        </div>
        <div className="option">
          <div className="description">Escribenos por Whatsapp</div>
          <a className="link" href="https://wa.me/56945228784">
            <Icons name="message" />
            <span className="info">+56 945228784</span>
          </a>
        </div>
        <div className="option">
          <div className="description">Instagram Estetica</div>
          <a className="link" href="https://www.instagram.com/salexave/">
            <Icons name="instagram" />
            <span className="info">@salexave</span>
          </a>
        </div>
        <div className="option">
          <div className="description">Instagram Manicura</div>
          <a className="link" href="https://www.instagram.com/nails_salexa/">
            <Icons name="instagram" />
            <span className="info">@nails_salexa</span>
          </a>
        </div>
        <div className="option">
          <div className="description">Facebook</div>
          <a
            className="link"
            href="https://www.facebook.com/salexaesteticavenezolana"
          >
            <Icons name="facebook" />
            <span className="info">Salexa Estetica Venezolana</span>
          </a>
        </div>
        <div className="option">
          <div className="description">Visitanos en</div>
          <a
            className="link"
            href="https://www.google.com/maps/place/Galerias+La+Fuente/@-33.4188758,-70.6056259,17z/data=!3m1!4b1!4m5!3m4!1s0x9662cf6a2ed680c1:0xd05e1d9b4f20b4cc!8m2!3d-33.4188803!4d-70.6034372"
          >
            <Icons name="map" />
            <span className="info">Av Providencia 2550, local 17</span>
          </a>
        </div>
      </div>
    </div>
  )
}
