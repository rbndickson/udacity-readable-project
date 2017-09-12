import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Readable</h2>
          <Navigation />
        </div>
        <Route exact path="/" render={() => (
          <div>
            <h2>All Posts</h2>
            <PostList />
          </div>
        )}/>
        <Route path="/:category" render={() => (
          <div>
            A category..!
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
