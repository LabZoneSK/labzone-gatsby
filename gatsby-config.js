/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Welcome to LabZone s.r.o.`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
        connectionString:
          `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fe7db.mongodb.net`,
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
