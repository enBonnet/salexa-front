import React, { Fragment } from "react"

import Lobby from "../lobby"
import Services from "../services"
import Us from "../us"
import Contact from "../contact"

export const Home = ({ data: { services, team } }) => {
  return (
    <Fragment>
      <Lobby
        message="Estetica Venezolana"
        img="https://images.pexels.com/photos/957882/pexels-photo-957882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <Services services={services} />
      <Lobby
        message="En Santiago de Chile"
        img="https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <Us team={team} />
      <Lobby
        message="Excelencia"
        img="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <Contact />
    </Fragment>
  )
}
