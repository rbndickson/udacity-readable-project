import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, getPosts } from '../utils/api';
import { addCategory, addPost } from '../actions'

class App extends Component {
  componentDidMount() {
    getCategories().then((categories) => {
      categories.forEach((category) => {
        this.props.dispatch(addCategory(category));
      })
    });

    getPosts().then((posts) => {
      posts.forEach((post) => {
        this.props.dispatch(addPost(post));
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
                all
              </li>
              {this.props.categories.map((category) => (
                <li key={category.name}>{category.name}</li>
              ))}
            </ul>
          </nav>
        </div>
        <section>
          <div>
          </div>
        </section>
        <section>
          <ul>
            {this.props.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </section>
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


function mapStateToProps ({ categories, posts }) {
  const category_keys = Object.keys(categories);
  const post_keys = Object.keys(posts);

  return {
    categories: category_keys.map(category_key => categories[category_key]),
    posts: post_keys.map(post_key => posts[post_key]),
  }
}

export default connect(mapStateToProps)(App);
