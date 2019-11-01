import React from "react"
import styled from "styled-components"

import "./lobby.scss"

export const Lobby = ({ message, img }) => {
  return (
    <Wrapper className="lobby" img={img}>
      <div className="title-lobby">{message}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-image: url(${props => props.img});
`
