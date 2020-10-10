import React from "react"
import styled from "@emotion/styled"

import { device } from "../utils/device"
import { color } from "../utils/color"

/** Ciarocka :)
 
:before {
    display: block;
    content: " ";
    background-color: ${color.primary};
    height: 2px;
    width: 25px;
    position: relative;
    top: 0.95em;
    right: 1em;
    border-radius:25%;
  }

 */
const StyledSection = styled.section`
  padding: 3rem 0 3rem 0;
  `

const SectionTitle = styled.h2`
  color: #00a9bb;
  font-size: 1.6em;
  font-weight: 700;
  margin-bottom: 1.6rem;

  @media ${device.laptop} {
    font-size: 2.5em;
  }
`

export default function Section(props) {
  const { title, children } = props

  return (
    <StyledSection className='content-section'>
      <SectionTitle>{title}</SectionTitle>

      {children}
    </StyledSection>
  )
}
