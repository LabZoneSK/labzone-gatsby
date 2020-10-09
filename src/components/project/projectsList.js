import React from 'react'

/** Emotion and Styling */
import styled from '@emotion/styled'

/** Components */
import ProjectItem from './projectItem'

import Button from '../button'
import Center from '../center'

export default function Projectslist () {
  return (
    <div>
      <ProjectItem />
      <ProjectItem />

      <Center className='mt-5'>
        <Button>More projects</Button>
      </Center>
    </div>
  )
}
