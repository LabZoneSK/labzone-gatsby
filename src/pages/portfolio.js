import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Emotion & Styling */
import styled from "@emotion/styled"

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"
import Center from "../components/center"

import ProjectsList from "../components/project/projectsList"
export default function Portfolio({ data }) {
  console.log(data)
  const projects = data.allPrismicProject.edges

  return (
    <Layout>
      <Section title="Check our portfolio">
        <ProjectsList projects={projects} />

        <Center>
          <div className="mt-3 has-text-centered is-size-5">
            Got questions?
            <br />
            Contact us directly at info@labzone.sk
          </div>
        </Center>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicProject {
      edges {
        node {
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
