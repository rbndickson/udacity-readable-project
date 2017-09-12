import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Readable</h2>
          <Navigation />
        </div>
        <Route exact path="/" component={Main} />
        <Route path="/:category" component={Main} />
      </div>
    );
  }
}

export default App;
