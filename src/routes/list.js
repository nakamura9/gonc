import React from 'react';
import {createClient} from 'contentful'
import {Link} from 'react-router-dom'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})


const Blog =(props) =>{
    const [posts, setPosts] = React.useState([])
    
    React.useEffect(()=>{
        client.getEntries({
            content_type: 'blogPost'
        }).then(res =>{
            let posts = res.items
            
            setPosts(posts)
        });
    }, [])

    return(
        <React.Fragment>
        <h1 >GONC Blog</h1>
        <hr className="my-2"/>
        <div>
        {posts.map(post =>(
            <Link to={`/post/${post.sys.id}`} style={{textDecoration: 'none', color: '#6a2c70'}}>
                <div >
                    <div style={{flex: 1}}>
                        <img alt='gonc blog image' src={post.fields.thumbnail.fields.file.url}/>
                    </div>
                    <div style={{flex: 3}}>
                        <h4>{post.fields.title}</h4>
                        <p>Date: {post.fields.datePosted}</p>
                        <h6>{post.fields.author.fields.name}</h6>
                        <div style={{padding: '0.5rem'}}>
                            {post.fields.tags.map(tag => (<span ># {tag.fields.name}</span>))}
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>
        </React.Fragment>
    )
}

export default Blog