import React from "react"

import "./services.scss"

export const Services = () => {
  return (
    <div className="services">
      <h2 className="section-title">Servicios</h2>
      <div className="service">
        <div className="title">Peluqueria</div>
        <div className="image">
          <img src="https://via.placeholder.com/250" alt="peluqueria" />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
          ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et
          magnam totam neque iure vel hic minus! Voluptatem, omnis?
        </div>
      </div>
      <div className="service">
        <div className="title">Peluqueria</div>
        <div className="image">
          <img src="https://via.placeholder.com/250" alt="peluqueria" />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
          ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et
          magnam totam neque iure vel hic minus! Voluptatem, omnis?
        </div>
      </div>
    </div>
  )
}
