const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMongodbLabzoneSiteProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  
  result.data.allMongodbLabzoneSiteProjects.edges.forEach(({ node }) => {

    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/project-detail.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
