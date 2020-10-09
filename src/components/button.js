import React from "react"

/** Emotion + Styling */
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

export default function Button(props) {
  const { children, isLink } = props

  return (
    <PrimaryButton className="button is-rounded" style={{}}>
      {children}
    </PrimaryButton>
  )
}
