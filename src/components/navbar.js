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

const Button = styled.button`
  background-color: transparent;
  border: 0;

  &:active,
  &:hover {
    background-color: transparent;
  }
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

  const handleMobileButtonClick = event => {

    const el = event.target
    const target = el.dataset.target
    const $target = document.getElementById(target)

    if ($target) {
      el.classList.toggle("is-active")
      $target.classList.toggle("is-active")
    } else {
      console.error("Mobile menu button cannot find main menu element.")
    }
  }

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

        <Button
          className="navbar-burger button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          onClick={handleMobileButtonClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Button>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/portfolio/" className="navbar-item">
            Portfolio
          </Link>
          <Link to="/blog/" className="navbar-item">
            Blog
          </Link>
        </div>
      </div>
    </CustomizedNav>
  )
}
