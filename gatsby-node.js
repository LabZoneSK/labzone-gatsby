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
    createPage({
      path: node.data.slug.text,
      component: path.resolve(`./src/templates/project-detail.js`),
      context: {
        slug: node.data.slug.text,
      },
    })
  })
}
