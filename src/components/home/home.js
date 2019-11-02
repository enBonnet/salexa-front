import React, { Fragment } from "react"

import Lobby from "../lobby"
import Services from "../services"
import Us from "../us"
import Contact from "../contact"
import Navbar from "../navbar"
import useIsMobile from "../../hooks/useIsMobile"

export const Home = ({ data: { services, team, lobby1, lobby2, lobby3 } }) => {
  const isMobile = useIsMobile()
  return (
    <Fragment>
      {isMobile ? null : <Navbar />}
      <Lobby lobby={lobby1} />
      <Services services={services} />
      <Lobby lobby={lobby2} />
      <Us team={team} />
      <Lobby lobby={lobby3} />
      <Contact />
    </Fragment>
  )
}
