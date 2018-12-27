import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import User from './User'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/users/:id' component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
