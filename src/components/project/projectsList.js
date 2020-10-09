import React from "react"

/** Emotion and Styling */
import styled from "@emotion/styled"

/** Components */
import ProjectItem from "./projectItem"

import Button from "../button"
import Center from "../center"

export default function Projectslist(props) {
  const { projects } = props

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

      <Center className="mt-5">
        <Button>More projects</Button>
      </Center>
    </div>
  )
}
