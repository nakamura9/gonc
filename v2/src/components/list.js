import React from 'react';
import {createClient} from 'contentful'
import ListCard from '../components/list_card'


const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})


const Blog =(props) =>{
    const [posts, setPosts] = React.useState([])
    
    React.useEffect(()=>{
        client.getEntries({
                content_type: 'blogPost',
                'limit': 20
            }).then(res =>{
                setPosts(res.items)
            });
        
            }, [])

    return(
        <React.Fragment>
        
            <div class="post-list">
                {posts.map((post, i)=>(
                    <ListCard data={post} key={i}/>
                ))}
            </div>
        
</React.Fragment>
    )
}

export default Blog