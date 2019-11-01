import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lobby from "../components/lobby"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Salexa" />
    <Lobby
      message="Estetica Venezolana"
      img="https://images.pexels.com/photos/957882/pexels-photo-957882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    <Services />
    <Lobby
      message="En Santiago de Chile"
      img="https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
  </Layout>
)

export default IndexPage
