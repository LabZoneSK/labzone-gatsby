import React from "react"
import PropTypes from "prop-types"

/** Gatsby */
import { Link } from "gatsby"

import { FormattedMessage } from "react-intl"

/** Components */
import ProjectItem from "./projectItem"

import Center from "../center"

/** Utils */
import { sanitizeLinkForProduction } from "../../utils/helpers"

export default function ProjectsList(props) {
  const { projects, hasShowMore } = props

  if (!projects) {
    return
  }

  console.log(projects)

  return (
    <div>
      {projects.map(project => (
        <ProjectItem
          name={project.node.data.project_title.text}
          description={project.node.data.project_summary.html}
          featured={project.node.data.featured_image}
          slug={`${project.node.lang}/${project.node.data.slug.text}`}
          key={project.node.data.project_title.text}
        />
      ))}

      {hasShowMore && (
        <Center className="mt-5">
          <Link className="btn is-tertiary" to={`/portfolio/`}>
            <FormattedMessage
              id="showPortfolio"
              defaultMessage="Show me portfolio"
            />
          </Link>
        </Center>
      )}
    </div>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        lang: PropTypes.string,
        data: PropTypes.shape({
          featured_image: PropTypes.object,
          project_summary: PropTypes.PropTypes.shape({
            html: PropTypes.string.isRequired,
          }),
          project_title: PropTypes.shape({
            text: PropTypes.string.isRequired,
          }),
          slug: PropTypes.shape({
            text: PropTypes.string.isRequired,
          }),
        }),
      }),
    })
  ),
  hasShowMore: PropTypes.bool,
}
