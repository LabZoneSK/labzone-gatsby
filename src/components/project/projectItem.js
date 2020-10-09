import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { color } from "../../utils/color"

/** Components */
import Button from "../button"
import Icon from "../icon"

const ProjectItemWrapper = styled.div`
  padding: 4rem 0;

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
      <div className="columns">
        <div className="column is-half">
          <ProjectItemTitle>{name}</ProjectItemTitle>

          <ProjectItemDescription>{description}</ProjectItemDescription>
          <ProjectTechnologiesWrapper>
            {technologies &&
              technologies.map(technology => (
                <Icon
                  source={`/images/technologies/${technology}.svg`}
                  size="sm"
                  isGrayscale
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
