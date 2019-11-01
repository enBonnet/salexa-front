import React from "react"

import "./services.scss"

export const Services = ({ services }) => {
  return (
    <div id="services" className="services">
      <h2 className="section-title">Servicios</h2>
      {services.map(({ name, photo, description }) => (
        <div className="service">
          <div className="title">{name}</div>
          <div className="image">
            <img src={photo} alt={name} />
          </div>
          <div className="description">{description}</div>
        </div>
      ))}
    </div>
  )
}
