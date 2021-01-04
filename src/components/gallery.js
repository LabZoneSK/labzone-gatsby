import React from "react"
import PropTypes from "prop-types"

/** Gatsby */
import Img from "gatsby-image"

import { injectIntl } from 'react-intl'

const Gallery = ({ images, intl }) => {
  if (!images) {
    return <p>There are no images in gallery.</p>
  }
  const imageElements = images.map((data, index) => {
    return (
      <div className="column is-12">
        <figure>
          <Img fluid={data.image.fluid} alt={data.alt_text.text} />
          <figcaption>{`${intl.formatMessage({ id: 'fig' })} ${index + 1}. ${data.caption.text}`}</figcaption>
        </figure>
      </div>
    )
  })
  return (
    <div>
      <div className="columns is-multiline">{imageElements}</div>
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt_text: PropTypes.string,
      caption: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    })
  ),
}

export default  injectIntl(Gallery);
