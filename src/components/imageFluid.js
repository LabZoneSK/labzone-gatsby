import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Imagefluid(props) {
  const { originalName } = props

  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          nodes {
            fluid {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageFluid = data.allImageSharp.nodes.find(image => {
    return image.fluid.originalName === originalName
  })

  return <>{imageFluid && <Img fluid={imageFluid.fluid} />}</>
}

Imagefluid.propTypes = {
  originalName: PropTypes.string.isRequired
}