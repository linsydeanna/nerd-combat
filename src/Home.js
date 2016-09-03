import React, {Component} from 'react'
import Routes from './routes'
import {Router, Route, hashHistory} from 'react-router';
import {Link} from 'react-router'

class Home extends Component {
  render () {
    return (
      <div>
      <h1 id="app-name">Nerd Combat</h1>
      <img id="home-image" src={`https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg`}/>
      <p id="description">Welcome to the nerdy superhero fight.</p>
      <Link to='/playerone'><button id="start-button"> Let's do this. </button></Link>
      </div>
    )
  }
}

export default Home
