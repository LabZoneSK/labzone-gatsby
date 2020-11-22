import React from "react"
import PropTypes from "prop-types"

import parse from "html-react-parser"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

/** Emotion */
import styled from "@emotion/styled"
import { device } from "../utils/device"

const HeroTitle = styled.h1`
  @media ${device.laptop} {
    font-size: 3em;
    width: 50%;
  }
`
const HeroSubTitle = styled.p`
  font-weight: 200;
  font-size: 1.3rem;
  color: white;
`

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
              <HeroTitle className="title has-text-white">
                {parse(title)}
              </HeroTitle>
              <HeroSubTitle>{parse(subtitle)}</HeroSubTitle>
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
