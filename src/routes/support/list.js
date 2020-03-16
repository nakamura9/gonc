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
            <div className={styles.articleListHeading}>
                <h1>{title}</h1>
                <button onClick={props.goHome}><i class="fas fa-arrow-left  fa-3x  "></i></button>
            </div>
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
                
                {currentArticle == '' ? <div>
                    <img src="/static/images/bentsch/support/instruction.svg" className={styles.blankArticle}  alt=""/>
                    <h2 className={styles.blankArticle}>Select An Article To Get Started</h2>
                </div> : <Article article={currentArticle} />}
            </div>
        </div>
    )


}

export default ArticleList