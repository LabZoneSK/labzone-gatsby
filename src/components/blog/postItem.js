import React from "react"
import PropTypes from "prop-types"

/** Components */
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"

/** Components */
import Tags from "../tags"

export default function PostItem({ post }) {

  console.log(post.lang)
  return (
    <div className="column is-one-third">
      {post.tags && <Tags tags={post.tags} />}
      <Link to={`/${post.lang}/blog/${post.uid}/`}>
        <Img
          fluid={post.data.hero_image.fluid}
          alt={post.data.hero_image.alt}
        />

        <h2 className="title is-size-5-desktop my-3">{post.data.title.text}</h2>
      </Link>
      <p className="my-3">{post.data.summary && post.data.summary.text} <span className="is-nowrap">[<Link to={`/${post.lang}/blog/${post.uid}/`}><FormattedMessage id="readPost" defaultMessage="Read&nbsp;post" /></Link>]</span></p>
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
