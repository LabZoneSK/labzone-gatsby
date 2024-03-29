import React from 'react'

/** Gatsby */
import { graphql } from 'gatsby'

/** Components */
import Layout from '../components/layout'
import PostsList from '../components/blog/postsList'
import Section from '../components/section'
import SeoHelmet from '../components/seo/seoHelmet'

export default function Blog({ data, location }) {
    const posts = data.allPrismicPost.edges

    return (
        <>
            <SeoHelmet
                title={`Blog | LabZone`}
                description="Actionable ideas, news, trends and customer stories."
            />

            <Layout location={location}>
                <Section>
                    <h1 className="section-title has-text-centered-mobile ">
                        The LabZone Blog
                    </h1>
                    <p className="is-size-5 mb-5">
                        The blog delivers the “why, how, what” behind our
                        services, products, and strategies to solve business and
                        technical challenges. You will find here actionable
                        ideas, news, trends and customer stories.
                    </p>
                    <PostsList posts={posts} />
                </Section>
            </Layout>
        </>
    )
}

export const query = graphql`
    {
        allPrismicPost(
            filter: { lang: { eq: "en" } }
            sort: { fields: [last_publication_date], order: [DESC] }
        ) {
            edges {
                node {
                    data {
                        hero_image {
                            alt
                            gatsbyImageData
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
