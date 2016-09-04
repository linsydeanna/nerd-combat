import React, { Component } from 'react';
import $ from 'jquery';
import Character from './Character';
import characters from './data.js'


class Search extends Component {
 constructor(props){
   super(props);
   this.state = {
     userInput: ''
   }
 }
 getData(){
   console.log(this.refs.superhero1.value);
  return $.get(
       `http://gateway.marvel.com:80/v1/public/characters?name=${this.refs.superhero1.value}&apikey=2e264257579ec772309983d87144e044`, function(response) {
         console.log("Response from API:", response);
         this.setState({
           name: response.data.results[0].name,
           id: response.data.results[0].id,
           image: response.data.results[0].thumbnail.path,
           description: response.data.results[0].description
         });

       }.bind(this)

   )
  //  this.lookupstats()
 }

 getCharacterInfo(characterId) {
   return characters.filter(character => character.id === characterId);
 }

 handleSubmit(event){
   event.preventDefault();
   this.getData()
   .then(response => this.getCharacterInfo(response.data.results[0].id))
   .then(character => this.props.battle(character[0]));
 }

 handleChange(event) {
  this.setState({userInput: event.target.value});
}
// lookupstats () {
//   const stats = characters.filter (function (superhero) {return superhero.id === this.state.id})
//   console.log("stats", stats);
// }
 render() {
   return (
     <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
         <label htmlFor="1st Superhero">Search for Superhero!</label>
         <input type="text" name="superhero1" placeholder="1st Superhero" ref="superhero1"/>
         <br />
         <button>Search</button>
       </form>

        <Character name={this.state.name} image={this.state.image} description={this.state.description} id={this.state.id}/>
     </div>
   )
 }
}

export default Search
