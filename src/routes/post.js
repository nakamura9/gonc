import React from 'react';
import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {Helmet} from 'react-helmet'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})

const Post =(props) =>{
    const [post, setPost] = React.useState(null)

    React.useEffect(()=>{
        client.getEntry(props.match.params.id).then(res=>{
            setPost(res)
        })
    }, [])
    return(
        <div>
                <div>
                    {post != null ? <React.Fragment>
                        <h1>{post.fields.title}</h1>
                        <p><i> Published: {new Date(post.fields.datePosted).toDateString()}</i></p>
                        <img src={`${post.fields.mainImage.fields.file.url}`} alt="Blog Post Title"/>
                        <br/>
                        <h5>By {post.fields.author.fields.name}</h5>
                        <hr className='my-2' />
                        
                        <div >
                        {documentToReactComponents(post.fields.content)}
                        </div>
                        
                        
                        <hr className='my-2' />
                        <p> <u> Tagged under:</u></p>
                        <div>
                            {post.fields.tags.map(tag=>(
                                <span ># {tag.fields.name}</span>
                            ))}
                        </div>
                    </React.Fragment> 
                    : <p>Loading blog post...</p>
                }
                </div>
            </div>
    )
}

export default Post