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
const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Welcome to LabZone s.r.o.`,
    description: `Using code, design and almost any other IT tool to solve business challenges. Exclusively remote.`,
    author: `LabZone`,
    siteUrl: siteUrl,
    languages
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
        icon: `src/images/logo-square-red.png`,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
          omitKeys: ['xmlnsSerif', 'xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
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
          joboffer: require("./src/schemas/joboffer.json"),
        },
      },
    },
    /** Internationalization - i18n */
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: languages.defaultLangKey,
        langKeyForNull: 'en',
        prefixDefault: false,

      },
    },
    /* SEO */
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://labzone.tech',
        sitemap: 'https://labzone.tech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-0CX996YZ0C", // Google Analytics / GA
        ],
      },
    },
  ],
}
