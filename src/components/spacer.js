import React from "react"
import PropTypes from "prop-types"

export default function Spacer(props) {
  const { title, subtitle, children } = props

  return (
    <div className="columns">
      <div className="column is-half mx-5-mobile">
        <h2 className="hero--title">{title}</h2>
        <p className="hero--subtitle">{subtitle}</p>
      </div>
      <div className="column is-half mx-5-mobile">
        {children}
      </div>
    </div>
  )
}

Spacer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node
}