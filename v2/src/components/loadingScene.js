import React from 'react'
import Scene from './scene'

const loadingScene = (props) =>{
    return(<Scene>
        <div id="dot" onClick='loadApp()'>
            <div id="dot-contents"></div>
        </div>
    </Scene>)
}

export default loadingScene