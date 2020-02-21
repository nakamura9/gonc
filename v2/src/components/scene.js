import React from 'react'
import styles from '../styles'

const scene = (props) =>{
    return(
        <div className={styles.scene}>
            {props.children}
        </div>
    )
}

export default scene