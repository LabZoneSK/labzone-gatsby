import React from "react"
import PropTypes from "prop-types"

/** Emotion */
import styled from "@emotion/styled"

/** Components */
import Img from "gatsby-image"
import { Link } from "gatsby"

/** Components */
import Tags from "../tags"

export default function PostItem({ post }) {
  return (
    <div className="column is-one-third">
      {post.tags && <Tags tags={post.tags} />}
      <Link to={`/blog/${post.uid}`}>
        <Img
          fluid={post.data.hero_image.fluid}
          alt={post.data.hero_image.alt}
        />

        <h2 className="title is-size-5-desktop my-3">{post.data.title.text}</h2>
      </Link>
      <p className="my-3">{post.data.summary && post.data.summary.text} [<Link to={`/blog/${post.uid}`}>Read&nbsp;post</Link>]</p>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.object.isRequired,
  }),
}
