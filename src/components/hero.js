import React from 'react'
import parse from 'html-react-parser'

/** Emotion */
import styled from '@emotion/styled'
import { device } from '../utils/device'

const HeroSection = styled.section`
  margin-bottom: 3rem;
  background: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.isRounded && 'border-radius: 0 100px 0 100px'};
`

const HeroTitle = styled.h1`
  @media ${device.laptop} {
    font-size: 3em;
    width: 50%;
  }
`

export default function Hero (props) {
  const { title, subtitle, image, children, isRounded } = props

  return (
    <HeroSection className='hero is-medium' image={image} isRounded={isRounded}>
      <div className='hero-body'>
        <div className='container'>
          {title && (
            <>
              <HeroTitle className='title has-text-white'>
                {parse(title)}
              </HeroTitle>
              <h2 className='subtitle has-text-white'>Primary bold subtitle</h2>
            </>
          )}

          {children}
        </div>
      </div>
    </HeroSection>
  )
}
