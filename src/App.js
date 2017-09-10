import React, { Component } from 'react';
import './App.css';
import { getCategories } from './utils/api'

class App extends Component {
  state = {
    categories: [],
  }
  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello World!</h2>
        </div>
        <h3>Categories</h3>
        <ul>
          {this.state.categories.map((category) => (
            <li key={category.name}>{category.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
