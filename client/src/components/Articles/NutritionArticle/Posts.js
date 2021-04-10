import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map((nutrition, index) => <Post nutrition={nutrition} key={index} />)}
        </div>
    )
}

export default Posts