import React from 'react'
import PropTypes from 'prop-types'

import { injectIntl } from 'react-intl'

//TODO: implement gallery
const Gallery = ({ images, intl }) => {
    return <div></div>
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

export default injectIntl(Gallery)
