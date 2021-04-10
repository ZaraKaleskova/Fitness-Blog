import React from 'react'
import marked from 'marked'

const Post = ({ nutrition }) => {
    console.log(nutrition)
    const { name, featuredImage, description } = nutrition.fields
    const postDescription = marked(description)
    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={name} title={name} />}
            <section className="postSection" dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post