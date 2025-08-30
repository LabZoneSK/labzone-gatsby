import React from 'react'
import PropTypes from 'prop-types'

export default function Center({ className, children }) {
    return <div className={['center', className].join(' ')}>{children}</div>
}

Center.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}
