import React from "react"

/** Gatsby */
import { Link } from "gatsby"
import { graphql } from "gatsby"

/** Emotion & Styling */
import styled from "@emotion/styled"
import { device } from "../../utils/device"

/** Components */
import Icon from "../icon"
import ImageFluid from "../imageFluid"

const ProjectItemWrapper = styled.div`
  padding: 2rem 0 4rem 0;

  @media ${device.laptop} {
    padding: 4rem 0;
  }
`

const ProjectItemTitle = styled.h2`
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`
const ProjectItemDescription = styled.p``

const ProjectTechnologiesWrapper = styled.div`
  margin-bottom: 1.6rem;
`

export default function Projectitem(props) {
  const { name, description, technologies, featured, slug } = props

  return (
    <ProjectItemWrapper>
      <div className="columns column-reverse-mobile">
        <div className="column is-half has-text-centered-mobile">
          <ProjectItemTitle className="has-text-centered-mobile">
            {name}
          </ProjectItemTitle>

          <ProjectItemDescription className="has-text-centered-mobile">
            {description}
          </ProjectItemDescription>
          <ProjectTechnologiesWrapper>
            {technologies &&
              technologies.map(technology => (
                <Icon
                  source={`/images/technologies/${technology}.svg`}
                  size="sm"
                  key={`icon-${technology}`}
                />
              ))}
          </ProjectTechnologiesWrapper>
          <Link className="btn is-primary" to={`/${slug}`}>
            Read more
          </Link>
        </div>
        <div className="column is-half">
          <ImageFluid originalName={featured} alt=""/>
        </div>
      </div>
    </ProjectItemWrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    mongodbLabzoneSiteProjects(slug: { eq: $slug }) {
      name
      technologies
      description
    }
  }
`
