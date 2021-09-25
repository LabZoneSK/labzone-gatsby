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
        <Section title="Become part of one of our amazing team">
          <p className="is-size-5 mb-5">
            It's not easy to find people who have a passion for their job, are
            enthusiastic to fulfill their tasks, like to grow and also help the
            company to grow. We have such people in our team and we are
            searching for others.
          </p>
          <h2 className="list-title">Open positions</h2>
          <JobsList jobs={jobs} />
        </Section>

        <Section title="No suitable position for you?" className="container">
          <p>
            Think you would fit in at LabZone but have not found the right open
            position? We are always on the lookout for new talent.
          </p>

          <div className="mt-6">
            <a
              className="lz-button button--isi"
              href="/contact/"
            >
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
