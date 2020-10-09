import React from 'react'

/** Emotion / Styling */
import styled from '@emotion/styled'
import { color } from '../utils/color'

const StyledFooter = styled.footer`
  background-color: ${color.dark};
  margin-top: 3rem;
`

export default function Footer () {
  return (
    <StyledFooter className='footer'>
      <div className='content has-text-centered'>
        <p>
          <strong className='has-text-white'>© 2020 LabZone s.r.o</strong>
        </p>
      </div>
    </StyledFooter>
  )
}
