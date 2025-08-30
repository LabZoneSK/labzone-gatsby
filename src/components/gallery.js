import React from 'react'
import PropTypes from 'prop-types'

// TODO: implement gallery
const Gallery = ({ images = [] }) => {
    if (!images.length) return null
    return <div role="list" aria-label="Gallery" />
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
        }),
    ),
}

Gallery.defaultProps = {
    images: [],
}

export default Gallery
