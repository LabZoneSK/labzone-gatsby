import React from "react"

import { Link } from "gatsby"

/** Components */
import Center from "./center"

export default function ContactUs({ hasLinkToPortfolio }) {
  return (
    <Center>
      <div className="mt-6 has-text-centered is-size-5">
        Got questions?
        <br />
        Contact us directly at info@labzone.sk

        {hasLinkToPortfolio && (
          <div className="mt-6">
            <Link className="btn is-tertiary" to="/portfolio">
              {hasLinkToPortfolio}
            </Link>
          </div>
        )}
      </div>
    </Center>
  )
}
