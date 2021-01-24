import React from "react"
import PropTypes from "prop-types"

export default function Tags({ tags }) {
  return (
    <div className="tags mb-0">
      {tags && tags.map(tag => (
        <span key={`tag-${tag.split(' ').join('-')}`} className="tag is-dark">{tag}</span>
      ))}
    </div>
  )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
}