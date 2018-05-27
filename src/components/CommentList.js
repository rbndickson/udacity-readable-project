import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";

class CommentList extends Component {
  compareForHighestScore = (a, b) => {
    if (a.voteScore < b.voteScore) {
      return 1;
    }
    if (a.voteScore > b.voteScore) {
      return -1;
    }
    return 0;
  };

  render() {
    return (
      <div className="comments-container">
        {this.props.comments.sort(this.compareForHighestScore).map(comment => {
          return (
            <div className="comment" key={comment.id}>
              <Comment id={comment.id} />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const postId = ownProps.id;
  const comment_keys = Object.keys(state.comments);
  const comments = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === postId)
    .filter(comment => comment.deleted === false);

  return {
    post: state.posts[ownProps.id],
    comments: comments,
    commentCount: comments.length
  };
}

export default connect(mapStateToProps)(CommentList);
