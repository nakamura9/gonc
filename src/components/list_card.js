import React from 'react'
import {Link} from 'react-router-dom'

const ListCard = (props) =>{
    return (
        <div class="post">
            <img src={props.data.fields.thumbnail.fields.file.url} alt="post image"/>
            <div>
                <Link to={`/post/${props.data.sys.id}`} style={{
                    textDecoration: 'none'}}>
                    <h1>{props.data.fields.title}</h1>
                </Link>
                <p>{props.data.fields.author.fields.name}</p>
                <p class='post-date'>{new Date(props.data.fields.datePosted).toDateString()}</p>
            </div>
        </div>
    )
}

export default ListCard