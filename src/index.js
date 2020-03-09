import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Blog from './routes/list'
import Post from './routes/post'
import PhotoGallery from 'react-grid-gallery'

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

const photos = [
    {
        src: "/static/images/bentsch/gallery/crm.png",
        thumbnail: "/static/images/bentsch/gallery/crm.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/account dash.png",
        thumbnail: "/static/images/bentsch/gallery/account dash.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/calendar.png",
        thumbnail: "/static/images/bentsch/gallery/calendar.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/general ledger.png",
        thumbnail: "/static/images/bentsch/gallery/general ledger.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/lead detail.png",
        thumbnail: "/static/images/bentsch/gallery/lead detail.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/po doc.png",
        thumbnail: "/static/images/bentsch/gallery/po doc.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/invoice.png",
        thumbnail: "/static/images/bentsch/gallery/invoice.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/wo.png",
        thumbnail: "/static/images/bentsch/gallery/wo.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/pos.png",
        thumbnail: "/static/images/bentsch/gallery/pos.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
    {
        src: "/static/images/bentsch/gallery/sales dash.png",
        thumbnail: "/static/images/bentsch/gallery/sales dash.png",
        thumbnailWidth: 320,
        thumbnailHeight: 213
    },
]
const root = document.getElementById('root')
const gallery = document.getElementById('gallery')
if(root){
    ReactDOM.render(<App />, root)
}
if(gallery){
    console.log('js')
    ReactDOM.render(<PhotoGallery images={photos} />, gallery)
}
