import React from "react"
import PropTypes from "prop-types"

import parse from "html-react-parser"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default function Hero(props) {
  const { title, subtitle, image, children } = props

  const data = useStaticQuery(
    graphql`
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
    `
  )

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
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-nunito text-3xl font-extrabold text-white sm:text-5xl">
                {parse(title)}
              </h1>
              <p className="mx-auto mt-4 max-w-xl font-monserrat font-extralight text-white sm:text-xl sm:leading-relaxed">
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

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
}
