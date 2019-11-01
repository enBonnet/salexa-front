import React from "react"

import "./us.scss"

export const Us = ({ team }) => {
  return (
    <section id="team" className="team">
      <h2 className="section-title">Equipo</h2>
      {team.map(({ job, photo, name, description }) => (
        <div className="member">
          <div className="title">{job}</div>
          <div className="image">
            <img src={photo} alt="fotografia del equipo" />
          </div>
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
      ))}
    </section>
  )
}
