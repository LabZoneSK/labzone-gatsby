import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import ContactUs from "../components/contactUs"
import FullBleed from "../components/fullBleed"
import Img from "gatsby-image"
import SeoHelmet from "../components/seo/seoHelmet"

export default function PostDetail({ data }) {
  const { title, content, hero_image } = data.prismicPost.data

  return (
    <>
      <SeoHelmet title={`${title.text} | LabZone`} />

      <Layout>
        <FullBleed>
          <Img fluid={hero_image.fluid} alt={hero_image.alt} style={{
              height:"500px"
          }}/>
        </FullBleed>
        <article className="blog-article content-section mt-6">
          <h1 className="title is-size-2-desktop has-text-primary">
            {title.text}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content.html,
            }}
          ></div>

          <ContactUs />
        </article>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    prismicPost(id: { eq: $id }) {
      uid
      data {
        content {
          html
        }
        hero_image {
          alt
          fluid(maxHeight: 400) {
            ...GatsbyPrismicImageFluid
          }
        }
        title {
          text
        }
      }
    }
  }
`
