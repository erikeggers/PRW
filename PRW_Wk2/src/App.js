import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Items from './components/Main'
import Footer from './components/Footer'


class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Items />
        <Footer />
      </div>
    )
  }
}



export default App
