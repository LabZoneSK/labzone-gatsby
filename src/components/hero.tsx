import React, { FC } from 'react'

import parse from 'html-react-parser'

import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { z } from 'zod'

const heroSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    children: z.custom<JSX.Element>(),
})

type HeroProps = z.infer<typeof heroSchema>

const Hero: FC<HeroProps> = props => {
    const { title, subtitle, image, children } = props

    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(quality: 80, maxWidth: 1920) {
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `)

    const imageFluid = data.allImageSharp.edges.find(edge => {
        return edge.node.fluid.originalName === image
    })

    return (
        <BackgroundImage
            Tag="section"
            className="hero is-medium"
            fluid={imageFluid.node.fluid}
            backgroundColor={`#040e18`}
        >
            <div className="hero-body">
                <div className="container">
                    {title && (
                        <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center">
                            <h1 className="hero-title font-nunito text-3xl font-extrabold text-white sm:text-5xl">
                                {parse(title)}
                            </h1>
                            <p className="hero-subtitle text-center mx-auto mt-4 max-w-xl font-montserrat font-extralight text-white sm:text-xl sm:leading-relaxed">
                                {parse(subtitle)}
                            </p>
                        </div>
                    )}

                    {children}
                </div>
            </div>
        </BackgroundImage>
    )
}

export default Hero
