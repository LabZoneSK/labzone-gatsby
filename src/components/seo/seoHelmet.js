import React from "react"
import { Helmet } from "react-helmet"

export default function SeoHelmet(props) {
  const { title, description, canonical, lang = 'en'} = props
  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <meta charSet="utf-8" />
        <title>{`${title} | LabZone`}</title>
        {description && <meta name='description' content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
    </>
  )
}
