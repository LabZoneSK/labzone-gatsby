import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'

export default function JsonLd({ children }) {
    return (
        <Helmet>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(children) }}
            />
        </Helmet>
    )
}

JsonLd.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
}
