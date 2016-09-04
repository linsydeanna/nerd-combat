import React, { Component } from 'react';
import $ from 'jquery';
import Character from './Character';
import characters from './data.js'


class SearchTwo extends Component {
 constructor(props){
   super(props);
   this.state = {
     name: "",
     id:"",
     image: "",
     description: ""
   }
 }
 handleSubmit(e){
   console.log(this.refs.superhero2.value);
   e.preventDefault();
   $.ajax({
       url: `http://gateway.marvel.com:80/v1/public/characters?name=${this.refs.superhero2.value}&apikey=2e264257579ec772309983d87144e044`,
       type: 'GET',
       success: function(response) {
         console.log(response);
         this.setState({
           name: response.data.results[0].name,
           id: response.data.results[0].id,
           image: response.data.results[0].thumbnail.path,
           description: response.data.results[0].description
         });
       }.bind(this)
   })
 }
 render() {
   console.log("this.state", this.state)
   return (
     <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
         <label htmlFor="2nd Superhero">Search for Superhero!</label>
         <input type="text" name="superhero2" placeholder="2nd Superhero" ref='superhero2'/>
         <br />
         <button>Search</button>
       </form>

       <Character name={this.state.name} image={this.state.image} description={this.state.description} id={this.state.id} />
     </div>
   )
 }
}

export default SearchTwo
