/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.labzone.tech",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Welcome to LabZone s.r.o.`,
    description: `Using code, design and almost any other IT tool to solve business challenges. Exclusively remote.`,
    author: `LabZone`,
    siteUrl: `https://www.labzone.tech`,
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
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://www.googletagmanager.com",
          "https://ajax.cloudflare.com/",
        ],
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
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `labzonetech`,
        accessToken: `${process.env.PRISMIC_API}`,
        schemas: {
          project: require("./src/schemas/project.json"),
          post: require("./src/schemas/post.json"),
        },
      },
    },
    /* SEO */
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    /* Analytics */
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-0CX996YZ0C`,
        head: false,
        anonymize: true,
      },
    },
  ],
}
