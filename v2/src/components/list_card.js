import React from 'react'

const ListCard = (props) =>{
    return (
        <div class="post">
            <div>
                <img src={props.data.fields.thumbnail.fields.file.url} alt="post image"/>
            </div>
            <div>
                <h3 style={{marginBlockStart: '0px'}}>{props.data.fields.title}</h3>
                <p>{props.data.fields.author.fields.name}</p>
                <p class='post-date'>{new Date(props.data.fields.datePosted).toDateString()}</p>
            </div>
        </div>
    )
}

export default ListCard