import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"

export default function ProjectDetail({ data }) {
  const { project_title, project_summary } = data.prismicProject.data

  return (
    <Layout>
      <Section title={project_title.text}>
        <div dangerouslySetInnerHTML={{
              __html: project_summary.html,
            }} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    prismicProject(data: { slug: { text: { eq: $slug } } }) {
      id
      data {
        featured_image {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyPrismicImageFluid
          }
        }
        project_summary {
          html
        }
        project_title {
          text
        }
      }
    }
  }
`
