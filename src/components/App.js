import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Category from "./Category";
import PostDetail from "./PostDetail";

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
        </Switch>
      </div>
    );
  }
}

export default App;
