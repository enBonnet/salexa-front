import React from "react"
import styled from "styled-components"

import "./lobby.scss"

export const Lobby = ({ lobby: { title, photo } }) => {
  return (
    <Wrapper className="lobby" img={photo.publicURL}>
      <div className="title-lobby">{title}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-image: url(${props => props.img});
`
