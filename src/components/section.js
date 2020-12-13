import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"

import { device } from "../utils/device"

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
    <StyledSection className="content-section">
      <SectionTitle className="has-text-centered-mobile">{title}</SectionTitle>
      {children}
    </StyledSection>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}
