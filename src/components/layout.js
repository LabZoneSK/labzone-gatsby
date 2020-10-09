import React from 'react'
import { Link } from 'gatsby'

/** Emotion */
import styled from '@emotion/styled'

/** Components */
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const HolyGrailMain = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr min(85ch, 100%) 1fr;

  & > .content-section {
    grid-column: 2;
  }
`


export default function Layout ({ children }) {
  return (
    <>
      <Navbar />

      <HolyGrailMain>{children}</HolyGrailMain>

      <Footer />
    </>
  )
}
