import React, {Component} from 'react'
import styles from './support.css'
import ArticleList from './list'
import {createClient} from 'contentful'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})


class Support extends Component {
    state = {
        categories: [],
        currentCategory: '',
        currentArticle: ''
    }

    componentDidMount(){
        client.getEntries({
            'content_type': 'supportCategory'
        }).then(res =>{
            this.setState({
                categories: res.items
            })
        })
        
    }
    render(){
        return(
            <div>
                <h1 >Bentsch Support</h1>
                {this.state.currentCategory == '' ?
                    <div className={styles.cardDeck}>
                        {this.state.categories.map(cat =>{
                            return(
                                <div className={styles.card} 
                                    key={cat.fields.name}
                                    onClick={() =>{
                                        this.setState({currentCategory: cat.sys.id})
                                    }}>
                                    <div className={styles.cardBody}>
                                        <img src={cat.fields.image.fields.file.url} alt={cat.fields.name}/>
                                        <h6>{cat.fields.name}</h6>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                :
                    <ArticleList 
                        category={this.state.currentCategory}/>  
                }
            </div>
        )
    }
}




export default Support