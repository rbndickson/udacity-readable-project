import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getCategories } from '../utils/api';

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
          <h2>Readable</h2>
        </div>
        <div>
          <ul>
            {this.state.categories.map((category) => (
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

export default App;
