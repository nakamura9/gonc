import React from 'react' 
import styles from './support.css'
import { BLOCKS } from '@contentful/rich-text-types';

import {createClient} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: "8e1sjlb73zoa",
    accessToken: "MclG8vKz_CQ-BpharA3e0rcIk6DML4UORbz7538r4R8"
})


const Article = (props) =>{
    const [imgSrc, setImgSrc] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState(null)

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            <img src={fields.file.url} className={styles.articleContentImg} />,
            
          }
      };

    React.useEffect(() =>{
      client.getEntry(props.article).then(res =>{
          setImgSrc(res.fields.titleImage.fields.file.url)
          setTitle(res.fields.title)
          setContent(res.fields.content)
      })  
    },[props.article])
    return(
        <div className={styles.article}>
            <img src={imgSrc}
                className={styles.articleImg}/>
            <h3>{title}</h3>
            {documentToReactComponents(content, options)}
        </div> 
       )
}

export default Article