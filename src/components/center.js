import React from "react"
import PropTypes from "prop-types"

/** Emotion & styling */
import styled from "@emotion/styled"

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default function Center({ className, children }) {
  return <CenterWrapper className={className}>{children}</CenterWrapper>
}

Center.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
