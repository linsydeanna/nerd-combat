import React, { Component } from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {Link} from 'react-router';
import Home from './Home';
import PlayerOne from './PlayerOne';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
