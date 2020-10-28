/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Welcome to LabZone s.r.o.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LabZone Website`,
        short_name: `LabZone`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#15b0d4`,
        display: `standalone`,
        icon: `src/images/logo-black.png`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `labzone_site`,
        collection: [`projects`],
        connectionString: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fe7db.mongodb.net`,
        extraParams: {
          replicaSet: "Cluster0-shard-0",
          ssl: true,
          authSource: `admin`,
          retryWrites: true,
        },
      },
    },
  ],
}
