module.exports = {
  siteMetadata: {
    title: `Peluquería Venezolana`,
    description: `Peluquería Venezolana en Santiago de Chile, con estilistas de experiencia internacional`,
    author: `@enBonnet`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `salexave`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://salexa-cms.herokuapp.com",
        contentTypes: ["equipo", "servicio", "lobby"],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Salexa Estetica Venezolana`,
        short_name: `Salexa`,
        start_url: `/`,
        background_color: `#454955`,
        theme_color: `#454955`,
        display: `standalone`,
        icon: `src/images/logos/icono.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
