import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Blog from './routes/list'
import Post from './routes/post'


const App = (props) =>{
    return(
        <Router>
            <Switch>
                <Route path='/post/:id' component={Post} />
                <Route path='/' component={Blog}/>
            </Switch>
        </Router>
    )

}



ReactDOM.render(<App />, document.getElementById('root'))