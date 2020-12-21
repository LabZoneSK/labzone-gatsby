import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"
import ContactUs from "../components/contactUs"
import SeoHelmet from "../components/seo/seoHelmet"

import ProjectsList from "../components/project/projectsList"
export default function Portfolio({ data, location }) {
  const projects = data.allPrismicProject.edges

  return (
    <>
      <SeoHelmet
        title={`Portfólio`}
        description='Labzone teams have completed software development projects for clients from Slovakia, Czech Republic, and Finland.'
      />

      <Layout location={location}>
        <Section title="Ukážky projektov, na ktorých sme pracovali">
          <ProjectsList projects={projects} />

          <ContactUs />
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allPrismicProject(filter: {lang: {eq: "sk"}}) {
      edges {
        node {
          lang
          data {
            project_title {
              text
            }
            slug {
              text
            }
            project_summary {
              html
            }
            featured_image {
              fluid(maxWidth: 400, maxHeight: 300) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  }
`
