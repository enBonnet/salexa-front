import React from "react"

import "./services.scss"

export const Services = ({ services }) => {
  return (
    <div id="services" className="services">
      <h2 className="section-title">Servicios</h2>
      <div className="list">
        {services.map(({ name, photo, description }, index) => (
          <div className="service" key={index}>
            <div className="title">{name}</div>
            <div className="image">
              <img src={photo} alt={name} />
            </div>
            <div className="description">{description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
