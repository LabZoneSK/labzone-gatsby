import React from "react"
import PropTypes from "prop-types"

/** Gatsby */
import Img from "gatsby-image"

/** Compontents */
import Center from "./center"

export default function Blockquote({ quote, footer, image }) {
  return (
    <div className="blockquote">
      <div className="blockquote-content">
        <Center>
          <div className="column is-2 is-hidden-mobile mt-3">
            <Img fluid={image.fluid} alt={`Photography of ${footer}`} />
          </div>
          <div className="column is-10">
            <blockquote>
              <p className="blockquote-content">{quote}</p>
              <footer>{footer}</footer>
            </blockquote>
          </div>
        </Center>
      </div>
    </div>
  )
}

Blockquote.propTypes = {
  quote: PropTypes.string.isRequired,
  footer: PropTypes.string,
  image: PropTypes.object,
}
