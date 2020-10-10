import React from "react"
import { Helmet } from "react-helmet"

export default function SeoHelmet(props) {
  const { title, description, canonical } = props
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${title} | LabZone`}</title>
        {description && <meta name='description' content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
    </>
  )
}
