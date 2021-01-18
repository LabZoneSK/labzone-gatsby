import React from "react"
import { FormattedMessage } from "react-intl"
import PropTypes from "prop-types"

/** Gatsby */
import { Link } from "gatsby"

/** Emotion & Styling */
import styled from "@emotion/styled"

/** Components */
import Img from "gatsby-image"

const ProjectItemTitle = styled.h2`
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`
const ProjectItemDescription = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export default function ProjectItem(props) {
  const { name, description, featured, slug } = props

  return (
    <div className="project-item">
      <div className="columns column-reverse-mobile">
        <div className="column is-half has-text-centered-mobile">
          <ProjectItemTitle className="has-text-centered-mobile">
            {name}
          </ProjectItemTitle>

          <ProjectItemDescription
            className="has-text-centered-mobile"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />

          <div className="project-item--button-wrapper">
            <Link
              className="lz-button lz-button--border-thin button--isi button--isi--inverted"
              to={`/${slug}/`}
            >
              <FormattedMessage id="readMoreProject" defaultMessage="Read more" />
            </Link>
          </div>
        </div>
        <div className="column is-half">
          <Img fluid={featured.fluid} alt="" />
        </div>
      </div>
    </div>
  )
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  featured: PropTypes.object,
  slug: PropTypes.string.isRequired,
}
