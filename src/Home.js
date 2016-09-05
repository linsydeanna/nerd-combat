import React, {Component} from 'react'
import Search from './Search'
import SearchTwo from './SearchTwo'
import characterlist from './data.js'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  getMyHomeworkDone () {
    console.log(characterlist[0].durability + characterlist[0].energy + characterlist[0].fighting + characterlist[0].intelligence + characterlist[0].speed + characterlist[0].strength)
  }

  render () {
    return (
      <div>
      <h1 id="app-name">Nerd Combat</h1>
      <img id="home-image" src={`https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg`}/>
      <p id="description">Welcome to the nerdy superhero fight.</p>
      <Search characters={this.state.characters}/>
      <Search characters={this.state.characters}/>
      {/*<SearchTwo characters={this.sendCharactersToBattle.bind(this)}/> */}
      <p>Current state of the array is {this.state.characters}</p>

      <button onClick={this.getMyHomeworkDone}>Get it done!</button>
      </div>
    )
  }
}

export default Home
