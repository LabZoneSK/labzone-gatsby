import React from 'react'
import PropTypes from 'prop-types'

import containerStyles from './container.module.scss'

export default function Container({ children, className }) {
    return (
        <div
            className={[containerStyles.container, className]
                .filter(Boolean)
                .join(' ')}
        >
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
