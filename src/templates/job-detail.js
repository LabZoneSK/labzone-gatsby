import React from "react"

/** Gatsby */
import { graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

/** Components */
import Layout from "../components/layout"
import ContactUs from "../components/contactUs"
import FullBleed from "../components/fullBleed"
import Hero from "../components/hero"
import Img from "gatsby-image"
import Section from "../components/section"
import SeoHelmet from "../components/seo/seoHelmet"

/** Prismic */
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../utils/prismic"

/** Utils */
import { sanitizeLink } from "../utils/helpers"

export default function JobDetail({ data, location }) {
  const {
    title,
    allocation,
    description,
    responsibilities,
    requirements,
    nicetohave,
    offer,
  } = data.prismicJoboffer.data

  const lang = data.prismicJoboffer.lang

  return (
    <>
      <SeoHelmet title={`${title.text}`} lang={lang} />

      <Layout location={location}>
        <FullBleed>
          <Hero image="developing-programmer-development-website-design-coding-technologies.jpg"></Hero>
        </FullBleed>

        <article className="blog-article content-section mt-6">
          <h1 className="title is-size-2-desktop has-text-primary">
            {title.text}
          </h1>
          <RichText render={description.raw} linkResolver={linkResolver} />

          <h2><FormattedMessage id="whatInvolves" defaultMessage="What it involves" /></h2>
          <RichText render={responsibilities.raw} linkResolver={linkResolver} />

          <h2><FormattedMessage id="lookingForSkills" defaultMessage="Skills we´re looking for" /></h2>
          <RichText render={requirements.raw} linkResolver={linkResolver} />

          <h2><FormattedMessage id="delightedToHave" defaultMessage="Delighted if you have" /></h2>
          <RichText render={nicetohave.raw} linkResolver={linkResolver} />

          <h2><FormattedMessage id="whatOffer" defaultMessage="What we offer" /></h2>
          <RichText render={offer.raw} linkResolver={linkResolver} />

          <p className="is-size-5 mb-5">
          <FormattedMessage id="jobClosingText" defaultMessage="There's a lot more to us than meets the eye. So if this resonates with you, we´d like to hear from you." />
            
          </p>

          <div className="mt-6 center">
            <a
              className="lz-button button--isi"
              href={sanitizeLink(`/${lang}/contact/`)}
            >
              <FormattedMessage id="ApplyNow" defaultMessage="Apply Now" />
            </a>
          </div>
        </article>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    prismicJoboffer(id: { eq: $id }) {
      uid
      lang
      data {
        title {
          text
        }
        allocation {
          text
        }
        location {
          text
        }
        description {
          raw
        }
        responsibilities {
          raw
        }
        requirements {
          raw
        }
        nicetohave {
          raw
        }
        offer {
          raw
        }
      }
    }
  }
`
