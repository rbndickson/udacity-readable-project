import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Category from './Category';
import PostDetail from './PostDetail';
import NewPost from './NewPost';
import EditPost from './EditPost';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Readable</h2>
          <Navigation />
        </div>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:post" component={PostDetail} />
          <Route exact path="/:category/:post/edit" component={EditPost} />
        </Switch>
      </div>
    );
  }
}

export default App;
