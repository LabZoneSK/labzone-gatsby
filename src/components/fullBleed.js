import React from "react"

import styled from "@emotion/styled"

const FullBleedDiv = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  grid-column: 1 / 4;

  & img {
    width: 100%;
  }
`

export default function FullBleed(props) {
  return <FullBleedDiv>{props.children}</FullBleedDiv>
}
