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
        title={`Portfolio | LabZone`}
        description="Are you looking for remote software development team? Labzone teams have completed severral projects for international clients - fully remote."
      />

      <Layout location={location}>
        <Section>
          <h1 className="section-title has-text-centered-mobile ">
            Check our portfolio
          </h1>
          <ProjectsList projects={projects} />

          <ContactUs />
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allPrismicProject(filter: { lang: { eq: "en" } }) {
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
