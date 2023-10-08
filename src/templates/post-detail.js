import React from 'react'

/** Gatsby */
import { graphql } from 'gatsby'

/** Components */
import Layout from '../components/layout'
import ContactUs from '../components/contactUs'
import FullBleed from '../components/fullBleed'
import { GatsbyImage } from 'gatsby-plugin-image'
import SeoHelmet from '../components/seo/seoHelmet'

/** Prismic */
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/prismic'

export default function PostDetail({ data, location }) {
    const { title, content, hero_image, summary } = data.prismicPost.data

    const lang = data.prismicPost.lang

    return (
        <>
            <SeoHelmet
                title={`${title.text}`}
                lang={lang}
                description={summary.text}
                image={hero_image.src}
            />

            <Layout location={location}>
                <FullBleed>
                    <GatsbyImage
                        image={hero_image.gatsbyImageData}
                        alt={hero_image.alt}
                        style={{
                            height: '500px',
                        }}
                    />
                </FullBleed>
                <article className="blog-article content-section mt-6">
                    <h1 className="title is-size-2-desktop has-text-primary">
                        {title.text}
                    </h1>

                    <RichText
                        render={content.raw}
                        linkResolver={linkResolver}
                    />

                    <ContactUs />
                </article>
            </Layout>
        </>
    )
}

export const query = graphql`
    query ($id: String!) {
        prismicPost(id: { eq: $id }) {
            uid
            lang
            data {
                content {
                    raw
                }
                hero_image {
                    alt
                    gatsbyImageData
                    url
                }
                title {
                    text
                }
                summary {
                    text
                }
            }
        }
    }
`
