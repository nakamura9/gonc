import React from 'react';
import {createClient} from 'contentful'
import {Link} from 'react-router-dom'
import Filters from '../components/filters'
import ListCard from '../components/list_card'
import HeroCard from '../components/hero_card'


const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})


const Blog =(props) =>{
    const [posts, setPosts] = React.useState([])
    const [heroPosts, setHeroPosts] = React.useState([])
    
    React.useEffect(()=>{
        client.getEntries({
            content_type: 'blogPost',
            'limit': 20
        }).then(res =>{
            let posts = res.items
            
            setPosts(posts)
        });
        client.getEntries({
            content_type: 'blogPost',
            'order': 'sys.createdAt',
            'limit': 3
        }).then(res =>{
            setHeroPosts(res.items)
        });
    }, [])

    return(
        <React.Fragment>
        <section>
        <div class="hero"></div>
        <div class='hero-text'>
            <h1>GONC Blog</h1>
            <h5>Informative, Insightful.</h5>
        </div>
        <div class='latest-posts'>
            {heroPosts.map((post, i) =>(
                <HeroCard data={post} key={i} />
            ))}
        </div>
    </section>

    <section>
        <h1 style={{textAlign: 'center'}}>Post List</h1>
        <div class='post-container'>
            <Filters client={client}
                filterList={(arg) =>{
                    console.log(arg)
                }}/>
            <div class="post-list">
                {posts.map((post, i)=>(
                    <ListCard data={post} key={i}/>
                ))}
            </div>
        </div>
    </section>
</React.Fragment>
    )
}

export default Blog