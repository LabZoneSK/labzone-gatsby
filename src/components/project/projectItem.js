import React from "react"
import { Link } from "gatsby"

/** Emotion & Styling */
import styled from "@emotion/styled"
import { color } from "../../utils/color"
import { device } from '../../utils/device'

/** Components */
import Icon from "../icon"

const ProjectItemWrapper = styled.div`
  padding: 2rem 0 4rem 0;

  @media ${device.laptop} {
    padding: 4rem 0;
  }

  &:after {
    display: block;
    content: " ";
    background-color: ${color.primary};
    height: 3px;
    width: 33%;
    position: relative;
    top: 3rem;
    left: 33%;
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
          <ProjectItemTitle className="has-text-centered-mobile">{name}</ProjectItemTitle>

          <ProjectItemDescription className="has-text-centered-mobile">{description}</ProjectItemDescription>
          <ProjectTechnologiesWrapper>
            {technologies &&
              technologies.map(technology => (
                <Icon
                  source={`/images/technologies/${technology}.svg`}
                  size="sm"
                />
              ))}
          </ProjectTechnologiesWrapper>
          <Link className="button is-primary is-rounded" to={slug}>Read more</Link>
        </div>
        <div className="column is-half">
          <img src={`/images/${featured}`} alt="" />
        </div>
      </div>
    </ProjectItemWrapper>
  )
}
