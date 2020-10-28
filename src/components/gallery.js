import React from "react"

/** Gatsby */
import Img from "gatsby-image"

export default function Gallery({ images }) {
  console.log("gallery", images)
  if (!images) {
    return <p>There are no images in gallery.</p>
  }
  const imageElements = images.map(data => {
    return (
      <div className="column is-6">
        <Img
          fluid={data.image.fluid}
          alt=""
        />
      </div>
    )
  })
  return (
    <div>
      <div className="columns is-multiline">{imageElements}</div>
    </div>
  )
}
