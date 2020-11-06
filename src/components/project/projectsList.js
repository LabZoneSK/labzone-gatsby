import React from "react"
import { Link } from "gatsby"

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
