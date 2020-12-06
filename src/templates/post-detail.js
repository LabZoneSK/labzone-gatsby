import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import Header from "../components/header"
import SeoHelmet from "../components/seo/seoHelmet"

export default function PostDetail({ data }) {
  const { title, content } = data.prismicPost.data

  return (
    <>
      <SeoHelmet title={`${title.text} | LabZone`} />

      <Layout>
        <article className="blog-article content-section">
          <h1 className="title is-2 has-text-primary">{title.text}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content.html,
            }}
          ></div>
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
        title {
          text
        }
      }
    }
  }
`
