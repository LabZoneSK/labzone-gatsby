import React from 'react'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'

export default function Imagefluid(props) {
    const { originalName } = props

    const data = useStaticQuery(graphql`
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
    `)

    const imageFluid = data.allImageSharp.nodes.find(image => {
        return image.fluid.originalName === originalName
    })

    return <>{imageFluid}</>
}

Imagefluid.propTypes = {
    originalName: PropTypes.string.isRequired,
}
