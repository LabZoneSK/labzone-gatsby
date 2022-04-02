import React from "react"

export default function Client({ logo, alt, link }) {
  return (
    <div className="column is-2-desktop is-half-mobile has-text-centered">
      <img
        src={logo}
        alt={alt}
        className="client-logo"
      />
    </div>
  )
}
