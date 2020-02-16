import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Salexa" />
      <Home data={data} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    lobby1: strapiLobby(strapiId: { eq: 2 }) {
      photo {
        publicURL
      }
      title
    }
    lobby2: strapiLobby(strapiId: { eq: 3 }) {
      photo {
        publicURL
      }
      title
    }
    lobby3: strapiLobby(strapiId: { eq: 1 }) {
      photo {
        publicURL
      }
      title
    }
    services: allStrapiServicio(
      limit: 3
      sort: { fields: strapiId, order: ASC }
    ) {
      group(field: id) {
        nodes {
          nombre
          imagen {
            publicURL
          }
          descripcion
        }
      }
    }
    team: allStrapiEquipo(limit: 3, sort: { fields: strapiId, order: ASC }) {
      group(field: id) {
        edges {
          node {
            especialidad
            foto {
              publicURL
            }
            nombre
            descripcion
          }
        }
      }
    }
    instagram: allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`
