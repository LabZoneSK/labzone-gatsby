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
  const projects = data.allMongodbLabzoneSiteProjects.edges

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
    allMongodbLabzoneSiteProjects {
      edges {
        node {
          technologies
          name
          description
          featured
          slug
        }
      }
    }
  }
`
