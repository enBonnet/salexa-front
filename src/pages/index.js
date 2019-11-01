import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

const data = {
  services: [
    {
      name: "Peluqueria",
      photo: "https://via.placeholder.com/250",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et magnam totam neque iure vel hic minus! Voluptatem, omnis?",
    },
    {
      name: "Peluqueria",
      photo: "https://via.placeholder.com/250",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et magnam totam neque iure vel hic minus! Voluptatem, omnis?",
    },
    {
      name: "Peluqueria",
      photo: "https://via.placeholder.com/250",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et magnam totam neque iure vel hic minus! Voluptatem, omnis?",
    },
  ],
  team: [
    {
      job: "Estilista",
      photo: "https://via.placeholder.com/250",
      name: "Marleny Kremisisky",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et magnam totam neque iure vel hic minus! Voluptatem, omnis?",
    },
    {
      job: "Manicurista",
      photo: "https://via.placeholder.com/250",
      name: "Osmaily Lopez",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et magnam totam neque iure vel hic minus! Voluptatem, omnis?",
    },
    {
      job: "Manicurista",
      photo: "https://via.placeholder.com/250",
      name: "Ana Maria",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore ducimus quo inventore ea minima maiores tenetur quasi labore quod. Et magnam totam neque iure vel hic minus! Voluptatem, omnis?",
    },
  ],
}

const IndexPage = () => (
  <Layout>
    <SEO title="Salexa" />
    <Home data={data} />
  </Layout>
)

export default IndexPage
