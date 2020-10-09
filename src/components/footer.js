import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  background-color: #00a9bb;
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
