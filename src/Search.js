import React, { Component } from 'react';
import $ from 'jquery';
import Character from './Character';
import FilterCharacter from './FilterCharacter'
import characterlist from './data.js'


class Search extends Component {
 constructor(props){
   super(props);
   this.state = {
     userInput: ''
   }
 }

 handleSubmit(event){
   const heroName = event.target.value
   console.log('===', heroName);
   this.setState({
     name: heroName
   });
   event.preventDefault();
   $.ajax({
       url: `http://gateway.marvel.com:80/v1/public/characters?name=${heroName}&apikey=2e264257579ec772309983d87144e044`,
       type: 'GET',
       success: function(response) {
         console.log(response);
         this.setState({
          id: response.data.results[0].id,
          image: response.data.results[0].thumbnail.path,
          description: response.data.results[0].description
        });
        console.log("state", this.state)
       }.bind(this)
   })
}
 render() {
   return (
     <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
         <label htmlFor="1st Superhero">Search for Superhero!</label>
          <br />
           <select ref="selectBox" onChange={this.handleSubmit.bind(this)}>
            <option value="">Select a Character</option>
            {
              characterlist.map(c => <option key={c.id} value={c.name}>{c.name}</option>)
            }
          </select>
       </form>

        <Character name={this.state.name} image={this.state.image} description={this.state.description} id={this.state.id}/>
        <FilterCharacter id={this.state.id} name={this.state.name} characters={this.props.characters}/>
     </div>
   )
 }
}

export default Search
