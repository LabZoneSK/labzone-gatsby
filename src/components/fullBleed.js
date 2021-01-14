import React from "react"
import PropTypes from "prop-types"

/** Emotion & styling */
import styled from "@emotion/styled"

const FullBleedDiv = styled.div`
  width: 100%;
  overflow: hidden;
  grid-column: 1 / 4;

  background: var(--${props => props.color});

  &::after {
    display: block;
    content: "";
    background: var(--${props => props.color});
    width: 100%;
    height: 50px;
    transform: skewY(-1deg);
    position: absolute;
    margin-top: -25px;
  }

  & img {
    width: 100%;
  }
`

export default function FullBleed(props) {

  const { children, color, className } = props

  return <FullBleedDiv color={color} className={className}>{children}</FullBleedDiv>
}

FullBleed.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
}