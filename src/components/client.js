import React from "react"

export default function Client({ logo, alt, link }) {
  return (
    <div class="column is-2-desktop is-half-mobile has-text-centered">
      <img
        src={logo}
        alt={alt}
        class="client-logo"
      />
    </div>
  )
}
