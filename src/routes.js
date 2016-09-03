import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router';

class Routes extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <Route path="playerone" component={PlayerOne}/>
          <Route path="playertwo" component={PlayerTwo}/>
          <Route path="battle" component={Battle}/>
        </Route>
      </Router>
    )
  }
}

export default Routes
