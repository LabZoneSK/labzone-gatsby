import React from 'react'
import PropTypes from 'prop-types'

import config from '../config'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function SeoHelmet(props) {
    const {
        title,
        description,
        canonical,
        lang,
        image,
        isBlogPost,
        schemaOrgJSONLD,
    } = props

    const data = useStaticQuery(graphql`
        query {
            imageSharp(fluid: { originalName: { eq: "logo-square-red.png" } }) {
                fixed {
                    src
                }
            }

            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)

    const imageUrl = image
        ? image
        : `${data.site.siteMetadata.siteUrl}${data.imageSharp.fixed.src}`

    return (
        <>
            <Helmet htmlAttributes={{ lang }}>
                {/* General tags */}
                <meta charSet="utf-8" />
                <title>{`${title} | LabZone`}</title>
                {description && (
                    <meta name="description" content={description} />
                )}
                {canonical && <link rel="canonical" href={canonical} />}

                {/* Schema.org tags */}
                {schemaOrgJSONLD && (
                    <script type="application/ld+json">
                        {JSON.stringify(schemaOrgJSONLD)}
                    </script>
                )}

                {/* OpenGraph tags */}
                <meta property="og:url" content={config.url} />
                {isBlogPost ? (
                    <meta property="og:type" content="article" />
                ) : null}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={imageUrl} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={config.twitter} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageUrl} />
            </Helmet>
        </>
    )
}

SeoHelmet.defaultProps = {
    lang: 'en',
}

SeoHelmet.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    canonical: PropTypes.string,
    lang: PropTypes.string,
    image: PropTypes.string,
    isBlogPost: PropTypes.bool,
    schemaOrgJSONLD: PropTypes.object,
}
