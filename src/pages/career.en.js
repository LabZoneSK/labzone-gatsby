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
        title={`Careers`}
        description="Become part of one of our amazing team."
      />

      <Layout location={location}>
        <Section title="Let´s grow together">
          <p className="is-size-5 mb-5">
            We're building a remote dev community culture at Labzone where
            talented people like you can do their best work. If you're ready to
            kickstart or accelerate your career and help the leading EU
            organizations to shine, you've come to the right place.
          </p>
          <h2 className="list-title">Open positions</h2>
          <JobsList jobs={jobs} />
        </Section>

        <Section title="No suitable position?" className="container">
          <p>
            Think you would fit in at LabZone but haven't found the right
            position? We are always on the lookout for new talent, so get in
            touch to see if we're a match.
          </p>

          <div className="mt-6">
            <a className="lz-button button--isi" href="/contact/">
              Contact Us
            </a>
          </div>
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allPrismicJoboffer(filter: { lang: { eq: "en" } }) {
      edges {
        node {
          data {
            featuredimage {
              alt
              fluid(maxHeight: 400) {
                ...GatsbyPrismicImageFluid
              }
            }
            role {
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
