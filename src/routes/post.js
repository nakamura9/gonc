import React from 'react';
import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

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
        <section>
        {post != null ? 
            <React.Fragment>
            <div className='post-hero'>
                <img src={`${post.fields.mainImage.fields.file.url}`} alt="Blog Post Title"/>
                <div>
                    <div class='post-header'>
                        <h1>{post.fields.title}</h1>
                        <p> <i className="fas fa-clock    "></i>
                            <i> {new Date(post.fields.datePosted).toDateString()}</i>
                        </p>
                        <p><i className="fas fa-user    "></i> By {post.fields.author.fields.name}</p>
                    </div>
                </div>
            </div>
            <div className='post-content'>
                {documentToReactComponents(post.fields.content)}
            
                <hr className="my-2"/>
                <p style={{textAlign: 'center'}}> <u> Tagged under:</u></p>
                <div>
                    {post.fields.tags.map(tag=>(
                        <span className='post-tag' ># {tag.fields.name}</span>
                    ))}
                </div>
            </div>
            
            </React.Fragment> 
            : <p>Loading blog post...</p>
        }
        </section>
    )
}

export default Post