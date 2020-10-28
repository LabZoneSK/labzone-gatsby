import React from "react"

/** Gatsby */
import { Link } from "gatsby"
import { graphql } from "gatsby"

/** Emotion & Styling */
import styled from "@emotion/styled"
import { device } from "../../utils/device"

/** Components */
import Icon from "../icon"
import Img from "gatsby-image"

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
const ProjectItemDescription = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const ProjectTechnologiesWrapper = styled.div`
  margin-bottom: 1.6rem;
`

/** Ak by sme chceli aj ikonky
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
 */
export default function Projectitem(props) {
  const { name, description, featured, slug } = props

  console.log(featured);

  return (
    <ProjectItemWrapper>
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

          <Link className="btn is-primary" to={`/${slug}`}>
            Read more
          </Link>
        </div>
        <div className="column is-half">
          <Img fluid={featured.fluid} alt="" />
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
