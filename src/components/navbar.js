import React from "react"
import PropTypes from "prop-types"

/** Gatsby */
import { Link } from "gatsby"

/** Emotion & Styling */
import styled from "@emotion/styled"

/** Components */
// import Icon from "../components/icon"

import { FormattedMessage } from "react-intl"

/** Utils */
import { sanitizeLink } from "../utils/helpers"

const CustomizedNav = styled.nav`
  box-shadow: 0 2px 0 0 #f5f5f5;
`
const Button = styled.button`
  background-color: transparent;
  border: 0;

  &:active,
  &:hover {
    background-color: transparent;
  }
`

export default function Navbar({ homeLink, lang }) {

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
      <div className="container">
      <div className="navbar-brand">
        <Link to={homeLink} className="navbar-item">
          <img
          className="brand-logo"
              src="/images/labzone-logo.svg"
              alt="Logo LabZone s.r.o."
              width="123"
              height="21"
            />
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
          <Link to={homeLink} className="navbar-item">
            <FormattedMessage id="Home" defaultMessage="Home" />
          </Link>
          <Link
            to={sanitizeLink(`/${lang}/portfolio/`)}
            className="navbar-item"
          >
            <FormattedMessage id="Portfolio" defaultMessage="Portfolio" />
          </Link>
          <Link
            to={sanitizeLink(`/${lang}/career/`)}
            className="navbar-item"
          >
            <FormattedMessage id="Careers" defaultMessage="Careers" />
          </Link>
          <Link to={sanitizeLink(`/${lang}/blog/`)} className="navbar-item">
            <FormattedMessage id="Blog" defaultMessage="Blog" />
          </Link>
          <Link to={sanitizeLink(`/${lang}/contact/`)} className="navbar-item contact-navbar-link">
            <FormattedMessage id="Contact" defaultMessage="Contact Us" />
          </Link>
        </div>
      </div>
      </div>
    </CustomizedNav>
  )
}

Navbar.propTypes = {
  homeLink: PropTypes.string,
  lang: PropTypes.string,
}

Navbar.defaultValues = {
  homeLink: "/",
  lang: "en",
}
