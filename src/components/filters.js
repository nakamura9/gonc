import React from 'react'
import {createClient} from 'contentful'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})

const Filters = (props) =>{
    const [inputText, setInputText] =React.useState('')
    const [author, setAuthor] = React.useState('')
    const [tag, setTag] = React.useState('')
    const [authorList, setAuthorList] = React.useState([])
    const [tagList, setTagList] = React.useState([])

    React.useEffect(() =>{
        //set author and tag lists
        client.getEntries({
            'content_type': 'author'
        }).then(res =>{
            setAuthorList(res.items)
        })

        client.getEntries({
            'content_type': 'tag'
        }).then(res =>{
            setTagList(res.items)
        })
    }, [])

    React.useEffect(() =>{
        props.filterList({
            text: inputText,
            tag: tag,
            author: author
        })
    }, [inputText, author, tag])
    return(
        <div class='post-filters'>
                <h2> <i class="fas fa-filter fa-2x" aria-hidden="true"></i> Filters</h2>
                <p>Search</p>
                <input type="text" onChange={
                    evt => setInputText(evt.target.value)}/>
                {/*
                <h4>Tags</h4>
                {tagList.map((tag, i) =>(
                    <span className='post-tag' onClick={
                        () =>{setTag(tag.fields.name)}}>{tag.fields.name}</span>
                ))}
                <h4>Authors</h4>
                <div class='author-card-list'>
                    {authorList.map((author, i) =>(
                        <div class='author-card' onClick={
                            () =>{setAuthor(author.fields.name)}}>
                            <img src={author.fields.bioPicture.fields.file.url} alt="blog post author"/>
                            <h5>{author.fields.name}</h5>
                        </div>
                    ))}
                </div>
                
                */}
                
        </div>
    )
}


export default Filters