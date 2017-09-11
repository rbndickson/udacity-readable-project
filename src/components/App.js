import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories } from '../utils/api';
import { addCategory } from '../actions'

class App extends Component {
  componentWillMount() {
    getCategories().then((categories) => {
      categories.forEach((category) => {
        this.props.dispatch(addCategory(category));
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Readable</h2>
        </div>
        <div>
          <ul>
            {this.props.categories.map((category) => (
              <li key={category.name}>{category.name}</li>
            ))}
          </ul>
        </div>
        <Route exact path="/" render={() => (
          <div>
            Hello World!
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


function mapStateToProps (categories) {
  const category_keys = Object.keys(categories);

  return {
    categories: category_keys.map(category_key => categories[category_key])
  }
}

export default connect(mapStateToProps)(App);
