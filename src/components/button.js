import React from "react"
import PropTypes from "prop-types"

/** Emotion & Styling */
import styled from "@emotion/styled"
import { color } from "../utils/color"

const PrimaryButton = styled.button`
  background: ${color.primary};
  color: #fff;

  &:hover,
  &:active {
    color: #fff;
  }
`

export default function Button({ children }) {
  return (
    <PrimaryButton className="button is-rounded" style={{}}>
      {children}
    </PrimaryButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}
