import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'

export default function JsonLd({ children }) {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(children)}
            </script>
        </Helmet>
    )
}

JsonLd.propTypes = {
    children: PropTypes.node,
}
