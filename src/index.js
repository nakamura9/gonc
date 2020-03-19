import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Blog from './routes/list'
import Post from './routes/post'
import PhotoGallery from 'react-grid-gallery'
import Support from './routes/support/home'
import ArticleList from './routes/support/list'

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
        thumbnail: "/static/images/bentsch/gallery/thumbs/crm.png",
        thumbnailWidth: 320,
        thumbnailHeight: 155,
        caption: 'CRM Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/account dash.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/account dash.png",
        thumbnailWidth: 320,
        thumbnailHeight: 172,
        caption: 'Accounts  Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/calendar.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/calendar.png",
        thumbnailWidth: 320,
        thumbnailHeight: 155,
        caption: 'Calendar'
    },
    {
        src: "/static/images/bentsch/gallery/general ledger.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/general ledger.png",
        thumbnailWidth: 320,
        thumbnailHeight: 170,
        caption: 'General Ledger Report'
    },
    {
        src: "/static/images/bentsch/gallery/lead detail.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/lead detail.png",
        thumbnailWidth: 320,
        thumbnailHeight: 172,
        caption: 'Lead Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/po doc.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/po doc.png",
        thumbnailWidth: 320,
        thumbnailHeight: 154,
        caption: 'Purchase Order'
    },
    {
        src: "/static/images/bentsch/gallery/po.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/po.png",
        thumbnailWidth: 320,
        thumbnailHeight: 171,
        caption: 'Printable Purchase Order'
    },
    {
        src: "/static/images/bentsch/gallery/invoice.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/invoice.png",
        thumbnailWidth: 320,
        thumbnailHeight: 173,
        caption: 'Invoice Form'
    },
    {
        src: "/static/images/bentsch/gallery/wo.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/wo.png",
        thumbnailWidth: 320,
        thumbnailHeight: 172,
        caption: 'Work Order'
    },
    {
        src: "/static/images/bentsch/gallery/pos.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/pos.png",
        thumbnailWidth: 320,
        thumbnailHeight: 156,
        caption: 'Point of Sale'
    },
    {
        src: "/static/images/bentsch/gallery/sales dash.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/sales dash.png",
        thumbnailWidth: 320,
        thumbnailHeight: 173,
        caption: 'Sales Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/customer.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/customer.png",
        thumbnailWidth: 320,
        thumbnailHeight: 172,
        caption: 'Customer Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/employee.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/employee.png",
        thumbnailWidth: 320,
        thumbnailHeight: 117,
        caption: 'Employee Details Page'
    },
    {
        src: "/static/images/bentsch/gallery/employee-create.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/employee-create.png",
        thumbnailWidth: 320,
        thumbnailHeight: 139,
        caption: 'Employee create page'

    },
    {
        src: "/static/images/bentsch/gallery/timesheet.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/timesheet.png",
        thumbnailWidth: 320,
        thumbnailHeight: 168,
        caption: 'Timesheet page'
    },
    {
        src: "/static/images/bentsch/gallery/leave.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/leave.png",
        thumbnailWidth: 320,
        thumbnailHeight: 155,
        caption: 'Vacation Time calendar'
    },
    {
        src: "/static/images/bentsch/gallery/requisition.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/requisition.png",
        thumbnailWidth: 320,
        thumbnailHeight: 172,
        caption: 'Requisition Form'
    },
    {
        src: "/static/images/bentsch/gallery/procedure.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/procedure.png",
        thumbnailWidth: 320,
        thumbnailHeight: 170,
        caption: 'Procedure Form'
    },
    {
        src: "/static/images/bentsch/gallery/planner-dash.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/planner-dash.png",
        thumbnailWidth: 320,
        thumbnailHeight: 147,
        caption: 'Planner Dashboard'
    },
    {
        src: "/static/images/bentsch/gallery/invoice -doc.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/invoice -doc.png",
        thumbnailWidth: 320,
        thumbnailHeight: 195,
        caption: 'Printable Invoice'
    },
    {
        src: "/static/images/bentsch/gallery/sales report.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/sales report.png",
        thumbnailWidth: 320,
        thumbnailHeight: 172,
        caption: 'Sales Report'
    },
    {
        src: "/static/images/bentsch/gallery/warehouse.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/warehouse.png",
        thumbnailWidth: 320,
        thumbnailHeight: 172,
        caption: 'Warehouse Detail Page'
    },
    {
        src: "/static/images/bentsch/gallery/inv check.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/inv check.png",
        thumbnailWidth: 320,
        thumbnailHeight: 220,
        caption: 'Inventory Check report'
    },
    {
        src: "/static/images/bentsch/gallery/inv check create.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/inv check create.png",
        thumbnailWidth: 320,
        thumbnailHeight: 171,
        caption: 'Inventory Check create page'
    },
    {
        src: "/static/images/bentsch/gallery/balance sheet.png",
        thumbnail: "/static/images/bentsch/gallery/thumbs/balance sheet.png",
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: 'Balance sheet report'
    },
]
const root = document.getElementById('root')
const gallery = document.getElementById('gallery')
const support = document.getElementById('support')
if(root){
    ReactDOM.render(<App />, root)
}
if(gallery){
    ReactDOM.render(<PhotoGallery images={photos} />, gallery)
}


if(support){
    ReactDOM.render(<Support />, support)
}
