import React from 'react'
import PropTypes from "prop-types"

/** Emotion / Styling */
import styled from '@emotion/styled'
import { color } from '../utils/color'

const StyledFooter = styled.footer`
  background-color: var(--dark);
  margin-top: ${props =>
    props.hasLastDark ? '0' : '3rem'};
`

export default function Footer ({ hasLastDark }) {

  return (
    <StyledFooter className='footer' hasLastDark={hasLastDark}>
      <div className='content has-text-centered'>
        <p>
          <strong className='has-text-white'>© 2020 LabZone s.r.o</strong>
        </p>
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  hasLastDark: PropTypes.bool
}

Footer.defaultProps = {
  hasLastDark: false
}