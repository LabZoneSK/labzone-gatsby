import React from "react"
import PropTypes from "prop-types"

/** Emotion */
import styled from "@emotion/styled"
import { device } from "../utils/device"

/** Components */
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const HolyGrailMain = styled.main`
  display: grid;
  grid-template-columns: 1fr min(90ch, 100%) 1fr;

  & > .content-section {
    grid-column: 2;

    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media ${device.laptop} {
      padding-left: 0;
      padding-right: 0;
    }
  }
`

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <HolyGrailMain>{children}</HolyGrailMain>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
