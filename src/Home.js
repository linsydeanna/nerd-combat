import React, {Component} from 'react'
import Search from './Search'
import SearchTwo from './SearchTwo'
import BattleManager from './BattleManager'

class Home extends Component {
  constructor () {
    super ();
    this.state = {
      characters: [],
      readyForBattle: false
    };
  }
  sendCharactersToBattle(character) {
    this.setState({characters: this.state.characters.concat(character)});
    if (this.state.characters.length === 2) {
      this.setState({readyForBattle: true});
      BattleManager.addMessages(messages);
      console.log('===', BattleManager.statBattle(this.state.characters[0], this.state.characters[1], 100));
    }
  }
  render () {
    return (
      <div>
      <h1 id="app-name">Nerd Combat</h1>
      <img id="home-image" src={`https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg`}/>
      <p id="description">Welcome to the nerdy superhero fight.</p>
      <Search characters={this.sendCharactersToBattle.bind(this)}/>
      <Search characters={this.sendCharactersToBattle.bind(this)}/>
      {/*<SearchTwo characters={this.sendCharactersToBattle.bind(this)}/> */}
      <p>Current state of the array is {this.state.characters}</p>
      <button onClick={this.sendCharactersToBattle}>BATTLE</button>
      </div>
    )
  }
}

export default Home
