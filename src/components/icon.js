import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const handleIconSize = size => {
  switch (size) {
    case "sm":
      return "24px"
    case "md":
      return "48px"
    case "lg":
    default:
      return "64px"
  }
}

const StyledIcon = styled.img`
  height: ${props => handleIconSize(props.size)};
  margin: 0.5rem;
  display: inline;
  ${props => props.isGrayscale? 'filter: grayscale(100%);' : ''};
`

export default function Icon(props) {
  const { source, size, isGrayscale } = props

  return <StyledIcon size={size} src={source} isGrayscale={isGrayscale} />
}
