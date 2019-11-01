import React from "react"

import "./us.scss"

export const Us = ({ team }) => {
  return (
    <section id="team" className="team">
      <h2 className="section-title">Equipo</h2>
      <div className="list">
        {team.map(({ job, photo, name, description }, index) => (
          <div className="member" key={index}>
            <div className="title">{job}</div>
            <div className="image">
              <img src={photo} alt="fotografia del equipo" />
            </div>
            <div className="name">{name}</div>
            <div className="description">{description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
