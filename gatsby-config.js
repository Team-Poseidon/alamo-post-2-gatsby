require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

let facebook_pixel = ''
let gtm = ''

module.exports = {
  siteMetadata: {
    title: `Alamo Post 2`,
    description: `An American Legion organization to serve veterans and the community`,
    author: `Jason Gutierrez`,
    siteUrl: `https://alamopost2.org/`,
    phone: '(210) 732-1891',
    address: '3518 Fredericksburg Rd San Antonio, TX 78201',
    email: 'info@alamopost2.org'

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/gatsby-icon.png'
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        // List of the Content Types you want to be able to request from Gatsby.
        contentTypes: ["blog-posts","categories", "officers"],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`
  ],
}
