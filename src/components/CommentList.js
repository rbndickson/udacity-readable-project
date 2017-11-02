import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';
import { openNewCommentForm, closeNewCommentForm } from '../actions';

class CommentList extends Component {
  openNewCommentForm = () => {
    this.props.dispatch(openNewCommentForm(this.props.post.id))
  }

  closeNewCommentForm = () => {
    this.props.dispatch(closeNewCommentForm(this.props.post.id))
  }

  compareForHighestScore = (a, b) => {
    if (a.voteScore < b.voteScore) {
      return 1;
    }
    if (a.voteScore > b.voteScore) {
      return -1;
    }
    return 0;
  }

  render() {
    return (
      <div className="post-comments-container">
      <hr />
        <div className="post-comments">
          {this.props.newCommentFormOpen
            ? <div>
                <button onClick={ this.closeNewCommentForm }>Close</button>
                <div>
                  <NewCommentForm postId={this.props.post.id}/>
                </div>
              </div>
            : <button onClick={ this.openNewCommentForm }>Add New Comment</button>
          }
          {this.props.comments.sort(this.compareForHighestScore).map(comment => {
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
  const postId = ownProps.id
  const comment_keys = Object.keys(state.comments);
  const comments = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === postId)
    .filter(comment => comment.deleted === false);

  return {
    post: state.posts[ownProps.id],
    comments: comments,
    comment_count: comments.length,
    newCommentFormOpen: state.newCommentForms[ownProps.id] && state.newCommentForms[ownProps.id].newCommentFormOpen
  }
}

export default connect(mapStateToProps)(CommentList);
