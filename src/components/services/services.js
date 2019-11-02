import React from "react"

import "./services.scss"

export const Services = ({ services }) => {
  return (
    <div id="services" className="services">
      <h2 className="section-title">Servicios</h2>
      <div className="list">
        {services.group.map((service, index) => (
          <div className="service" key={index}>
            <div className="title">{service.nodes[0].nombre}</div>
            <div className="image">
              <img
                src={service.nodes[0].imagen.publicURL}
                alt={service.nodes[0].nombre}
              />
            </div>
            <div className="description">{service.nodes[0].descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
