import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import PostsList from "../components/blog/postsList"
import Section from "../components/section"
import SeoHelmet from "../components/seo/seoHelmet"

export default function Blog({ data, location }) {
  const posts = data.allPrismicPost.edges

  return (
    <>
      <SeoHelmet
        title={`Blog`}
        description="Nápady, novinky, trendy, klientské príhody a iné zo života LabZone."
      />

      <Layout location={location}>
        <Section title="LabZone Blog">
          <p className="is-size-5 mb-5">Blog prináša „prečo, ako, čo“ za našimi službami, produktami a stratégiami na riešenie obchodných a technických výziev. Nájdete tu užitočné nápady, novinky, trendy a príbehy zákazníkov.</p>
          <PostsList posts={posts} />
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allPrismicPost(filter: {lang: {eq: "sk"}}) {
      edges {
        node {
          data {
            hero_image {
              alt
              fluid(maxHeight: 400) {
                ...GatsbyPrismicImageFluid
              }
            }
            title {
              text
            }
            summary {
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
