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
        description='Pozrite si ukážku projektov, na ktorých sme sa podielali.'
        lang="sk"
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
