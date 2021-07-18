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
        description="Hľadáte softvérových špecialistov pre váš projekt? Pozrite si ukážky projektov pre našich klientov."
        lang="sk"
      />

      <Layout location={location}>
        <Section>
          <h1 className="section-title has-text-centered-mobile ">
            Ukážky projektov, na ktorých sme pracovali
          </h1>
          <ProjectsList projects={projects} />

          <p>
            <a href="/portfolio">Viac projektov nájdete na našich stránkach v angličitine.</a>
          </p>

          <ContactUs />
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allPrismicProject(filter: { lang: { eq: "sk" } }) {
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
