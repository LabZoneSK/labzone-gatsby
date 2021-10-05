import React from 'react'
import PropTypes from "prop-types"

import JobItem from './jobItem'

export default function JobsList({ jobs}) {
    return (
        <div className="">
            {jobs.map(job => 
                <JobItem job={job.node} />
            )}
        </div>
    )
}

JobsList.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object).isRequired
}