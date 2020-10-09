import React from "react"
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"

export default function ProjectDetail({ data }) {
  const { name, description } = data.mongodbLabzoneSiteProjects

  return (
    <Layout>
      <Section title={name}>
        <div>{description}</div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mongodbLabzoneSiteProjects(slug: { eq: $slug }) {
      name
      technologies
      description
    }
  }
`
