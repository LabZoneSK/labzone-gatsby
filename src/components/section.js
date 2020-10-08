import React from "react"
import styled from "@emotion/styled"

import { device } from "../utils/device"

const SectionTitle = styled.h2`
  color: #00a9bb;
  font-size: 1.6em;
  font-weight: 700;

  :before {
    display: block;
    content: " ";
    background-color: #00a9bb;
    height: 5px;
    width: 105px;
    position: relative;
    top: 0.95em;
    right: 3em;
  }

  @media ${device.laptop} {
    font-size: 2.5em;
  }
`

export default function Section(props) {
  const { title, children } = props

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>

      {children}
    </section>
  )
}
