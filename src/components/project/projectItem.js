import React from 'react'

import styled from '@emotion/styled'
import { color } from '../../utils/color'

/** Components */
import Button from '../button'

const ProjectItemWrapper = styled.div`
  padding: 4rem 0;

  &:after {
    display: block;
    content: " ";
    background-color: ${color.primary};
    height: 3px;
    width: 33%;
    position: relative;
    top: 3rem;
    left: 33%;
  }
`

const ProjectItemTitle = styled.h2`
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`
const ProjectItemDescription = styled.p`
  margin-bottom: 1.6rem;
`


export default function Projectitem () {
  return (
    <ProjectItemWrapper>
      <div className='columns'>
        <div className='column is-half'>
          <ProjectItemTitle>Web stránky pre majolika.sk</ProjectItemTitle>

          <ProjectItemDescription>
            Vytvorili sme moderný a príťažlivý web podľa požiadaviek klienta,
            ktorého víziou bol minimalizmus a maximálna funkčnosť.
          </ProjectItemDescription>
         
         <Button>Viac informacii</Button>

        </div>
        <div className='column is-half'>
         <img src='/images/majolika-homepage.jpg' alt='' />
          </div>
      </div>
    </ProjectItemWrapper>
  )
}
