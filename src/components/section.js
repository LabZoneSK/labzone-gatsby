import React from "react"
import PropTypes from "prop-types"

export default function Section(props) {
  const { title, children, titleClass } = props

  return (
    <section className="content-section">
      <h2 className={"section-title has-text-centered-mobile " + titleClass}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  titleClass: PropTypes.string
}
