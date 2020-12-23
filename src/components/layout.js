import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

/** Emotion */
import styled from "@emotion/styled"
import { device } from "../utils/device"

/** Components */
import Navbar from "./navbar"
import Footer from "./footer"

/** i18n */
import { getCurrentLangKey } from "ptz-i18n"
import { IntlProvider } from "react-intl"
import "intl"

import getMessages from '../data/messages';

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

export default function Layout({
  children,
  location,
  hasLastDark,
}) {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)

  const url = location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, "/")

  return (
    <>
      <IntlProvider locale={langKey} defaultLocale={defaultLangKey} messages={getMessages(langKey)}>
        <Navbar homeLink={homeLink} lang={langKey} />

        <HolyGrailMain>{children}</HolyGrailMain>

        <Footer hasLastDark={hasLastDark} />
      </IntlProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  hasLastDark: PropTypes.bool,
}

Layout.defaultProps = {
  hasLastDark: false,
}
