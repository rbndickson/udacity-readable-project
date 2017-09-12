import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    return (
      <div className="post-comments-container">
      <hr />
        <div className="post-comments">
          <h4>Comments ({this.props.comment_count})</h4>
          {this.props.comments.map(comment => {
            return (
              <div key={comment.id}>
                <Comment id={comment.id} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const postID = ownProps.id
  const comment_keys = Object.keys(state.comments);
  const comments = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === postID)

  return {
    post: state.posts[ownProps.id],
    comments: comments,
    comment_count: comments.length,
  }
}

export default connect(mapStateToProps)(CommentList);
