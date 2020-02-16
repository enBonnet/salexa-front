import React, { Fragment } from "react"

import Lobby from "../lobby"
import Services from "../services"
import Us from "../us"
import Contact from "../contact"
import Navbar from "../navbar"
import Instagram from "../instagram"
import useIsMobile from "../../hooks/useIsMobile"

export const Home = ({
  data: { services, team, lobby1, lobby3, instagram },
}) => {
  const isMobile = useIsMobile()
  return (
    <Fragment>
      {isMobile ? null : <Navbar />}
      <Lobby lobby={lobby1} />
      <Services services={services} />
      <Instagram data={instagram.edges} />
      <Us team={team} />
      <Lobby lobby={lobby3} />
      <Contact />
    </Fragment>
  )
}
