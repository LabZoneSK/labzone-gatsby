import React from "react"

/** Emotion & Styling */
import styled from "@emotion/styled"
import { color } from "../utils/color"

const CardWrapper = styled.div`
  background-color: ${color.accentDark};
  border-radius: 6px;
  color: white;
  padding: 1rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  img {
    filter: invert(95%);
  }
`
const CardWrapperDark = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`

export default function Card(props) {
  const { isDark, children } = props

  if(isDark) {
    return <CardWrapperDark>{children}</CardWrapperDark>
  }
  return <CardWrapper>{children}</CardWrapper>
}