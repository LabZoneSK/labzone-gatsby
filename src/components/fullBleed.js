import React from "react"

import styled from "@emotion/styled"

const FullBleedDiv = styled.div`
  width: 100%;
  overflow: hidden;
  grid-column: 1 / 4;

  background: ${props => props.color};

  & img {
    width: 100%;
  }
`

export default function FullBleed(props) {

  const { children, color } = props

  return <FullBleedDiv color={color}>{children}</FullBleedDiv>
}
