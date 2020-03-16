import React from 'react'
import Article from './article'
import styles from './support.css'

import {createClient} from 'contentful'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})




const ArticleList = (props) =>{
    const [title, setTitle] = React.useState('')
    const [articles, setArticles] = React.useState([])
    const [currentArticle, setCurrentArticle] = React.useState('')
    React.useEffect(() =>{
        console.log(props.category)
        console.log(props)
        client.getEntry(props.category).then(res =>{
            console.log(res)
            setTitle(res.fields.name)
            if(res.fields.supportArticle){
                setArticles(res.fields.supportArticle)
            }

        })
    }, [props.category])
    return(
        <div className={styles.listContainer}>
            <div className={styles.sidebar}>
            <h1>{title}</h1>
            <hr/>
            <ul>
                {articles.map(article =>{
                    return(
                        <li onClick={() =>{
                            setCurrentArticle(article.sys.id)
                        }} className={`${styles.articleLi} ${currentArticle ==article.sys.id ? styles.liFocused : null }`}>{article.fields.title}</li>
                    )
                })}
            </ul>
            </div>
            <div className={styles.articleContent}>
                
                {currentArticle == '' ? null : <Article article={currentArticle} />}
            </div>
        </div>
    )


}

export default ArticleList