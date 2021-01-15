import React from "react"
import PropTypes from "prop-types"

export default function Section(props) {
  const { title, children, titleClass, className } = props

  return (
    <section className={new Array("content-section", className).join(" ")}>
      <h2 className={"section-title has-text-centered-mobile " + titleClass}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  titleClass: PropTypes.string,
  className: PropTypes.string
}
