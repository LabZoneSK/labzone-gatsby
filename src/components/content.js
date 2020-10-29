import React from "react"

/** Emotion and Styling */
import { ClassNames } from "@emotion/core"
export default function Content({ title, content, children, customClasses }) {
  if (!content && !children) {
    return ``
  }

  return (
    <ClassNames>
      {({ css, cx }) => {
        return (
          <section className="my-5">
            <h3 className="section-title h3">{title}</h3>
            <div
              className={cx({
                "section-content": true,
                [customClasses]: true,
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