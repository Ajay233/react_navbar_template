import React from 'react';
import { Router, Route } from 'react-router-dom'
import NavBar from './navBar/navBar'
import Home from './home'
import history from './history'

import './stylesheets/main.css'

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Router history={history}>
          <NavBar />
          <Route path="/" render={() => <Home />} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
