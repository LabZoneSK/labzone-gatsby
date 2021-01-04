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
            <>
              <h1 className="hero--title">
                {parse(title)}
              </h1>
              <p className="hero--subtitle">{parse(subtitle)}</p>
            </>
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
