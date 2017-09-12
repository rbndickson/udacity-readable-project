import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  componentDidMount() {
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <h3>
          {post.title}
        </h3>
        <p>
          {post.body}
        </p>
        <p>
          Posted by {post.author}
        </p>
        <p>
          {new Date(post.timestamp).toDateString()} at {new Date(post.timestamp).toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: state.posts[ownProps.id]
  }
}

export default connect(mapStateToProps)(Post);
