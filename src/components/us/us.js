import React from "react"

import "./us.scss"

export const Us = () => {
  return (
    <section id="team" className="team">
      <h2 className="section-title">Equipo</h2>
      <div className="member">
        <div className="title">Estilista</div>
        <div className="image">
          <img
            src="https://via.placeholder.com/250"
            alt="fotografia del equipo"
          />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
          ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et
          magnam totam neque iure vel hic minus! Voluptatem, omnis?
        </div>
      </div>
      <div className="member">
        <div className="title">Manicurista</div>
        <div className="image">
          <img
            src="https://via.placeholder.com/250"
            alt="fotografia del equipo"
          />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
          ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et
          magnam totam neque iure vel hic minus! Voluptatem, omnis?
        </div>
      </div>
    </section>
  )
}
