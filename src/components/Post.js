import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostComments } from '../utils/api';
import { addComment } from '../actions';
import CommentList from './CommentList';

class Post extends Component {
  componentDidMount() {
    getPostComments(this.props.id).then(comments => {
      comments.forEach((comment) => {
        this.props.dispatch(addComment(comment));
      })
    })
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <div className="post-parent">
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
        {this.props.comment_count > 0 && (
          <CommentList id={post.id}/>
        )}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const postID = ownProps.id
  const comment_keys = Object.keys(state.comments);
  const comment_count = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === postID)
    .length

  return {
    post: state.posts[ownProps.id],
    comment_count: comment_count,
  }
}

export default connect(mapStateToProps)(Post);
