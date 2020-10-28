import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/** Emotion & Styling */
import styled from "@emotion/styled"

/** Components */
// import Icon from "../components/icon"

const CustomizedNav = styled.nav`
  box-shadow: 0 2px 0 0 #f5f5f5;
`

const BrandIcon = styled(Img)`
  margin-right: 0.5rem;
`

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/lz_logo_black.png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <CustomizedNav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {data.file && (
            <BrandIcon
              fixed={data.file.childImageSharp.fixed}
              alt="Logo LabZone s.r.o."
            />
          )}
          <span>LabZone</span>
        </Link>

        <button
          className="navbar-burger button"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/portfolio" className="navbar-item">
            Portfolio
          </Link>
        </div>
      </div>
    </CustomizedNav>
  )
}

