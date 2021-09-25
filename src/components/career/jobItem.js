import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
export default function JobItem({ job }) {
  return (
    <div className="mb-5">
      <Link to={`/${job.lang}/career/${job.uid}/`}>
        <h2 className="item-title">{job.data.title.text}</h2>
      </Link>
      <div>
        <span>Full-time</span>
        <span>&nbsp;|&nbsp;</span>
        <span>Remote</span>
      </div>
    </div>
  )
}

JobItem.propTypes = {
  job: PropTypes.shape({
    data: PropTypes.object.isRequired,
  }),
}
