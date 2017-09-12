import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../utils/api';
import { addPost } from '../actions';

class PostList extends Component {
  componentDidMount() {
    getPosts().then((posts) => {
      posts.forEach((post) => {
        this.props.dispatch(addPost(post));
      })
    });
  }

  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
}


function mapStateToProps (state) {
  const post_keys = Object.keys(state.posts);

  return {
    posts: post_keys.map(post_key => state.posts[post_key]),
  }
}

export default connect(mapStateToProps)(PostList);
