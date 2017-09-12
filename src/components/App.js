import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../utils/api';
import { addCategory } from '../actions'
import PostList from './PostList'

class App extends Component {
  componentDidMount() {
    getCategories().then((categories) => {
      categories.forEach((category) => {
        this.props.dispatch(addCategory(category));
      })
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>Readable</h2>
          <nav>
            <ul>
              <li>
                <a href="/">all</a>
              </li>
              {this.props.categories.map((category) => (
                <li key={category.name}><a href={category.path}>{category.name}</a></li>
              ))}
            </ul>
          </nav>
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


function mapStateToProps (state) {
  const category_keys = Object.keys(state.categories);

  return {
    categories: category_keys.map(category_key => state.categories[category_key]),
  }
}

export default connect(mapStateToProps)(App);
