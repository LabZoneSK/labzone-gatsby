import React from "react"
import PropTypes from "prop-types"

export default function Header({ headerText }) {
  return <h1>{headerText}</h1>
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
}
