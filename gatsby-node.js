const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/project-detail.js`);
  const blogTemplate = path.resolve('src/templates/post-detail.js');
  const jobTemplate = path.resolve('src/templates/job-detail.js');

  const result = await graphql(`
    query {
      allPrismicProject {
        edges {
          node {
            lang
            data {
              slug {
                text
              }
            }
          }
        }
      }
      posts: allPrismicPost {
        edges {
          node {
            id
            uid
            lang
          }
        }
      }
      jobs: allPrismicJoboffer {
        edges {
          node {
            id
            uid
            lang
          }
        }
      }
    }
  `)
  
  result.data.allPrismicProject.edges.forEach(({ node }) => {    
    createPage({
      path: `/${node.lang}/${node.data.slug.text}/`,
      component: projectTemplate,
      context: {
        slug: node.data.slug.text,
      },
    })
  })

  
  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.lang}/blog/${node.uid}/`,
      component: blogTemplate,
      context: {
        id: node.id,
      }
    })
  })

  result.data.jobs.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.lang}/career/${node.uid}/`,
      component: jobTemplate,
      context: {
        id: node.id,
      }
    })
  })
}
