import React from 'react'

/** Emoition and styles */
import styled from '@emotion/styled'

const SpacerTitle = styled.h2`
  font-size: 3em;
  font-weight: 900;
  color: #fff;
`

const SpacerSubtitle = styled.p`
font-size: 1.5em;
font-weight: 200;
color: #fff;
`

export default function Spacer (props) {
  const { title, subtitle} = props

  return (
    <div className='columns'>
      <div className='column is-half'>
        <SpacerTitle>We build community</SpacerTitle>
        <SpacerSubtitle>
          { subtitle }
        </SpacerSubtitle>
      </div>
    </div>
  )
}
