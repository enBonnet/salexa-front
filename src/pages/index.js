import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lobby from "../components/lobby"

const IndexPage = () => (
  <Layout>
    <SEO title="Salexa" />
    <Lobby
      message="Estetica Venezolana"
      img="https://images.pexels.com/photos/957882/pexels-photo-957882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    <div className="services">
      <h2 className="section-title">Servicios</h2>
      <div className="service">
        <div className="title">Peluqueria</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
          ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et
          magnam totam neque iure vel hic minus! Voluptatem, omnis?
        </div>
      </div>
      <div className="service">
        <div className="title">Peluqueria</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore
          ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et
          magnam totam neque iure vel hic minus! Voluptatem, omnis?
        </div>
      </div>
    </div>
    <Lobby
      message="En Santiago de Chile"
      img="https://images.pexels.com/photos/2017747/pexels-photo-2017747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
  </Layout>
)

export default IndexPage
