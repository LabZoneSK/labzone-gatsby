import React from 'react'
import PropTypes from 'prop-types'

/** Components */
import PostItem from './postItem'

export default function PostsList({ posts }) {
    return (
        <div className="columns is-multiline">
            {posts.map(post => (
                <PostItem key={post.node.id} post={post.node} />
            ))}
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            node: PropTypes.object.isRequired,
        })
    ).isRequired,
}
