import React, { Component } from 'react';
import characterlist from './data.js';

class FilterCharacter extends Component {
  handleClick(e){
    e.preventDefault();
    console.log('props', this.props)
    this.props.characters.push(this.props.id);
    
    console.log(this.props.characters);
  }
  render(){

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Send to Battle</button>
      </div>
    );
  }
}

export default FilterCharacter
