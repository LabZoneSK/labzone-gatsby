import React from "react"
import PropTypes from "prop-types"

import GatsbyGallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

import { injectIntl } from "react-intl"

const Gallery = ({ images, intl }) => {

  return (
    <GatsbyGallery images={images} />
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        thumb: PropTypes.object,
        full: PropTypes.object,
        thumbAlt: PropTypes.string,
        title: PropTypes.string,
        caption: PropTypes.string,
      }),
    })
  ),
}

export default injectIntl(Gallery)
