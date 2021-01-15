import React from 'react'
import { Link } from "gatsby"

import PropTypes from "prop-types"

/** Emotion / Styling */
import styled from '@emotion/styled'

/** Utils */
import { sanitizeLink } from "../utils/helpers"
import { FormattedMessage } from "react-intl"

const StyledFooter = styled.footer`
  background-color: var(--dark);
  margin-top: ${props =>
    props.hasLastDark ? '0' : '3rem'};
`

export default function Footer ({ hasLastDark, lang }) {

  return (
    <StyledFooter className='footer' hasLastDark={hasLastDark}>
      <div className='content has-text-centered'>
        <p>
          <strong className='has-text-white'>© 2020 LabZone s.r.o</strong>
        </p>
        <p>
          <Link to={sanitizeLink(`/${lang}/privacy-policy/`)}  className='has-text-white'><FormattedMessage id="privacyPolicy" defaultMessage="Privacy Policy" /></Link>
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