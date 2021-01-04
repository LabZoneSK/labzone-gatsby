import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

/** Components */
import Center from "./center"
import { FormattedMessage } from "react-intl"

/** Utils */
import { sanitizeLink } from '../utils/helpers';

export default function ContactUs({ hasLinkToPortfolio, lang }) {
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
          <div className="mt-6 center">
            <Link className="lz-button button--isi" to="/portfolio/">
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
  lang: PropTypes.string
}

ContactUs.defaultValues = {
  lang: 'en'
}