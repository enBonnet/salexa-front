import React from "react"

import "./us.scss"

export const Us = ({ team }) => {
  return (
    <section id="team" className="team">
      <h2 className="section-title">Equipo</h2>
      <div className="list">
        {team.group.map((member, index) => (
          <div className="member" key={index}>
            <div className="title">{member.edges[0].node.especialidad}</div>
            <div className="image">
              <img
                src={member.edges[0].node.foto.publicURL}
                alt={member.edges[0].node.especialidad}
              />
            </div>
            <div className="name">{member.edges[0].node.nombre}</div>
            <div className="description">
              {member.edges[0].node.descripcion}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
