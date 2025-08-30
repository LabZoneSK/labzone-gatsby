import React from 'react'
import PropTypes from 'prop-types'

export default function Section(props) {
    const { title, children, titleClass, sectionClass } = props

    return (
        <section className={['content-section', sectionClass].join(' ')}>
            {title && (
                <h2
                    className={`section-title has-text-centered-mobile mt-3 ${titleClass}`}
                >
                    {title}
                </h2>
            )}
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    titleClass: PropTypes.string,
    sectionClass: PropTypes.string,
}
