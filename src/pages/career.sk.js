import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import JobsList from "../components/career/jobsList"
import Section from "../components/section"
import SeoHelmet from "../components/seo/seoHelmet"

export default function Career({ data, location }) {
  const jobs = data.allPrismicJoboffer.edges

  return (
    <>
      <SeoHelmet
        title={`Kariéra`}
        description="Staňte sa súčasťou nášho tímu."
      />

      <Layout location={location}>
        <Section title="Staňte sa súčasťou nášho tímu">
          <p className="is-size-5 mb-5">
            Nie je jednoduché nájsť ľudí s vášňou pre svoju prácu, zanietením
            zodpovedne plniť svoje úlohy a s chuťou posúvať dopredu seba i celú
            spoločnosť. My takých ľudí v tíme máme a hľadáme aj ďalších.
          </p>
          <h2 className="list-title">Voľné pracovné pozície</h2>
          <JobsList jobs={jobs} />
        </Section>

        <Section title="Nenašli ste žiadnu vhodnú pozíciu?" className="container">
          <p>
            Chcete sa pridať k LabZone, ale nenašli ste žiadnu vhodnú pozíciu pre vás? Nevadí, stále hľadáme šikovných ľudí. Tak neváhajte a spojte sa s nami.
          </p>

          <div className="mt-6">
            <a
              className="lz-button button--isi"
              href="/sk/contact/"
            >
              Kontaktovať LabZone
            </a>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allPrismicJoboffer(filter: { lang: { eq: "sk" } }) {
      edges {
        node {
          data {
            featuredimage {
              alt
              fluid(maxHeight: 400) {
                ...GatsbyPrismicImageFluid
              }
            }
            title {
              text
            }
            description {
              text
            }
          }
          uid
          tags
          lang
        }
      }
    }
  }
`
