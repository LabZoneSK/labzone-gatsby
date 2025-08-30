import React from 'react'
import PropTypes from 'prop-types'

import containerStyles from './container.module.scss'

export default function Container({ children }) {
    return <div className={containerStyles.container}>{children}</div>
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}
