import React from 'react'
import ReactDOM from 'react-dom'
import Context from './context'


class App extends React.Component{
    state = {
        activeScene: 'loading'
    }
    render(){
        return(
            <Context.Provider value>
                <React.Fragment>
            
                    <img src="/static/images/avatar.svg" alt="" srcset="" id='avatar' />

                </React.Fragment>
            </Context.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))