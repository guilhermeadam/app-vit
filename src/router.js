import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Feedback from './Pages/Feedback/Feedback'

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/feedback' component={Feedback}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        </Router>
    )
}

export default Root