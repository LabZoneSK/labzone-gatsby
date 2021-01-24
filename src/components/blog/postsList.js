import React from 'react'
import PropTypes from "prop-types"

/** Components */
import PostItem from "./postItem";

export default function PostsList({ posts }) {
    return (
        <div className="columns">
            {posts.map(post => 
                <PostItem key={post.node.uid} post={post.node} />
            )}
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
}