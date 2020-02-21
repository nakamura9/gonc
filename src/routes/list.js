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
    const [filters, setFilters] = React.useState(null)
    
    React.useEffect(()=>{
        
        client.getEntries({
            content_type: 'blogPost',
            'order': 'sys.createdAt',
            'limit': 3
        }).then(res =>{
            setHeroPosts(res.items)
        });
    }, [])

    React.useEffect(()=>{
        let filteredPosts = []
        if(filters == null){
            client.getEntries({
                content_type: 'blogPost',
                'limit': 20
            }).then(res =>{
                setPosts(res.items)
            });
        }else{
            if(filters.text != ""){
                client.getEntries({
                    content_type: 'blogPost',
                    query: filters.text,
                    
                }).then(res =>{
                    setPosts(res.items)
                });
        }
    }
        
        // if(filters != null){
        //     
        //     }

        //     //filter tags
        //     if(filters.tag != ""){
        //         let filteredTag;
        //         filteredPosts = filteredPosts.filter(post =>{
        //             for(tag in post.fields.tags){
        //                 if(tag == tag.fields.name){
        //                     return true;
        //                 }
        //             }
        //             return false
        //         })
        //     }
        //     //filter author
        //     if(filters.author != ""){
        //         filteredPosts = filteredPosts.filter(post =>{
        //             return(post.fields.author.name == author)
        //         })
        //     }
        // }
        // console.log(filteredPosts)
        // setPosts(filteredPosts)
    }, [filters])

    return(
        <React.Fragment>
        <section>
        <div class="hero"></div>
        <div class='hero-text'>
            <h1>GONC Blog</h1>
            <h5>Keep your finger on the pulse of the web development world. Stay up to date with everything happening at GONC</h5>
        </div>
        <div class='latest-posts'>
            {heroPosts.map((post, i) =>(
                <HeroCard data={post} key={i} />
            ))}
        </div>
    </section>

    <section>
        <h1 style={{textAlign: 'center'}}>Posts</h1>
        <div class='stack-divider'>
            <hr/>
                <span> <i class="fas fa-star  fa-2x  "></i></span>
            <hr/>
        </div>
        <div class='post-container'>
            {/*<Filters client={client}
                filterList={(arg) =>{
                    setFilters(arg)
                }}/> */}
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