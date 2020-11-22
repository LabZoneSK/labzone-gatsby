import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"

export default function SeoHelmet(props) {
  const { title, description, canonical, lang } = props
  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <meta charSet="utf-8" />
        <title>{`${title} | LabZone`}</title>
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
    </>
  )
}

SeoHelmet.defaultProps = {
  lang: 'en'
}

SeoHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonical: PropTypes.string,
  lang: PropTypes.string
}