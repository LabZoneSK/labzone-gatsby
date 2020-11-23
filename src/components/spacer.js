import React from "react"
import PropTypes from "prop-types"

/** Emotion and styles */
import styled from "@emotion/styled"
import { device } from "../utils/device"

const SpacerTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 900;
  color: #fff;

  margin-bottom: 1rem;

  @media ${device.laptop} {
    font-size: 3em;
  }
`

const SpacerSubtitle = styled.p`
  font-size: 1.3em;
  font-weight: 200;
  color: #fff;

  @media ${device.laptop} {
    font-size: 1.5em;
  }
`

export default function Spacer(props) {
  const { title, subtitle, children } = props

  return (
    <div className="columns">
      <div className="column is-half mx-5-mobile">
        <SpacerTitle>{title}</SpacerTitle>
        <SpacerSubtitle>{subtitle}</SpacerSubtitle>
      </div>
      <div className="column is-half mx-5-mobile">
        {children}
      </div>
    </div>
  )
}

Spacer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node
}