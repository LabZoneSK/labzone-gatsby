import React from "react"
import PropTypes from "prop-types"
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
          name={project.node.data.project_title.text}
          description={project.node.data.project_summary.html}
          featured={project.node.data.featured_image}
          slug={project.node.data.slug.text}
          key={project.node.data.project_title.text}
        />
      ))}

      {hasShowMore && (
        <Center className="mt-5">
          <Link className="btn is-tertiary" to="/portfolio">
            Show me portfolio
          </Link>
        </Center>
      )}
    </div>
  )
}
