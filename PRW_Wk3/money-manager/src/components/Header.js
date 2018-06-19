import React, { Component } from 'react'
import Nav from '../components/Nav'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>Money Manager</h1>
                <Nav />
            </header>
        )
    }
}

export default Header