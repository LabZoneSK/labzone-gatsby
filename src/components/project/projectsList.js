import React from "react"
import { Link } from "gatsby"

/** Emotion and Styling */
import styled from "@emotion/styled"

/** Components */
import ProjectItem from "./projectItem"

import Center from "../center"

export default function Projectslist(props) {
  const { projects, hasShowMore } = props

  if (!projects) {
    return
  }

  return (
    <div>
      {projects.map(project => (
        <ProjectItem
          name={project.node.name}
          description={project.node.description}
          technologies={project.node.technologies}
          featured={project.node.featured}
          slug={project.node.slug}
        />
      ))}

      {hasShowMore && (
        <Center className="mt-5">
          <Link className="button is-secondary is-rounded" to='/portfolio'>
            Show me portfolio
          </Link>
        </Center>
      )}
    </div>
  )
}
