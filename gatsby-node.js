const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allPrismicProject {
        edges {
          node {
            data {
              slug {
                text
              }
            }
          }
        }
      }
    }
  `)
  
  result.data.allPrismicProject.edges.forEach(({ node }) => {


    console.log(node)
    
    createPage({
      path: node.data.slug.text,
      component: path.resolve(`./src/templates/project-detail.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.data.slug.text,
      },
    })
  })
}
