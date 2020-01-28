import React from 'react';
import {Link}  from 'react-router-dom'


const HeroCard = (props) =>{
    return (
        <div class="post-card">
                <img alt='gonc blog image' src={props.data.fields.thumbnail.fields.file.url} />
                <Link to={`/post/${props.data.sys.id}`} style={{
                    textDecoration: 'none'}}>
                    <h1>{props.data.fields.title}</h1>
                </Link>
                <p><i>{new Date(props.data.fields.datePosted).toDateString()}</i></p>
                <p><b>{props.data.fields.author.fields.name}</b></p>
                <p>This is an article</p>
            </div>

    )
}


export default HeroCard