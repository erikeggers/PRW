import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/Overview">Overview</NavLink>
                <NavLink to="/Items">Items</NavLink>
                <NavLink to="/Checks">Checks</NavLink>
            </nav>
        )
    }
}

export default Nav