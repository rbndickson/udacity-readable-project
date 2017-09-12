import React, { Component } from 'react';
import PostList from './PostList';

class Main extends Component {
  render() {
    const category = this.props.match.params.category;

    return (
      category
        ? <main>
            <h2>{category}</h2>
            <PostList category={category} />
          </main>
        : <main>
            <h2>all</h2>
            <PostList />
          </main>
    );
  }
}

export default Main;
