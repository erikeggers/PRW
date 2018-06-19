import React, { Component } from 'react'

import {
    Route,
    // Link
} from 'react-router-dom'

import Overview from '../pages/Overview'
import Items from '../pages/Items'
import Checks from '../pages/Checks'

class Main extends Component {
    render() {
        return (
            <section className="content main-content">
            
                <Route exact path='/' component={Overview} />
                <Route exact path="/Overview" component={Overview} />
                <Route exact path="/Items" component={Items} />
                <Route exact path="/Checks" component={Checks} />
            </section>
        )
    }

}



export default Main
