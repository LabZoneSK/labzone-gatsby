import React from 'react'

/** Emotion + Styling */
import styled from '@emotion/styled'
import { color } from '../utils/color'

const PrimaryButton = styled.button`
  background: ${color.primary};
  color: #fff;
  border-radius: 25px;

  &:hover {
    color: #fff;
  }
`
export default function Button (props) {
  const { children } = props

  return (
    <PrimaryButton className='button' style={{}}>
      {children}
    </PrimaryButton>
  )
}
