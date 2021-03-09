import React from "react"
import PropTypes from "prop-types"

/** Emotion and Styling */
import { ClassNames } from "@emotion/react"

import { extractTextFromHTMLString } from "../utils/helpers"

export default function Content({ title, content, children, customClasses }) {
  if ((!content || extractTextFromHTMLString(content).length === 0) && !children) {
    return ``
  }

  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          <section className="my-5">
            <h2 className="section-title h2">{title}</h2>
            <div
              className={cx({
                "section-content": true,
                [customClasses]: customClasses,
              })}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />

            <div>{children}</div>
          </section>
        )
      }}
    </ClassNames>
  )
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  children: PropTypes.node,
  customClasses: PropTypes.string
}
