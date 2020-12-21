import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

/** Components */
import Center from "./center"
import { FormattedMessage } from "react-intl"

export default function ContactUs({ hasLinkToPortfolio }) {
  return (
    <Center>
      <div className="mt-6 has-text-centered is-size-5">
        <FormattedMessage id="gotQuestions" defaultMessage="Got questions?" />
        <br />
        <FormattedMessage
          id="contactUs"
          defaultMessage="Contact us directly at {email}"
          values={{ email: "info@labzone.sk" }}
        />

        {hasLinkToPortfolio && (
          <div className="mt-6">
            <Link className="btn is-tertiary" to="/portfolio/">
              {hasLinkToPortfolio}
            </Link>
          </div>
        )}
      </div>
    </Center>
  )
}

ContactUs.propTypes = {
  hasLinkToPortfolio: PropTypes.string,
}
