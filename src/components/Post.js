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
        <div className="post-body">
          {post.body}
        </div>
        <p className="post-author">
          Posted by {post.author}
        </p>
        <p className="post-date">
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
