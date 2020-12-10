import React from 'react';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul id="users-list">
            {posts.map(post => (
                <li key={post.id}>
                    {post.id} - {post.title}
                </li>
            ))}
        </ul>
    )
}

export default Posts;