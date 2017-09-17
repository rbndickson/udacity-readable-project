import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';
import { updateUserInterface } from '../actions';

class CommentList extends Component {
  openNewCommentForm = () => {
    this.props.dispatch(updateUserInterface(
      {
        [this.props.post.id]: { commentFormOpen: true, }
      }
    ));
  }

  closeNewCommentForm = () => {
    this.props.dispatch(updateUserInterface(
      {
        [this.props.post.id]: { commentFormOpen: false, }
      }
    ));
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
          <h4>Comments ({this.props.comment_count})</h4>
          {this.props.commentFormOpen
            ? <div>
                <button onClick={ this.closeNewCommentForm }>Close</button>
                <div>
                  <NewCommentForm parentId={this.props.post.id}/>
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
    commentFormOpen: state.userInterface[ownProps.id] && state.userInterface[ownProps.id].commentFormOpen,
  }
}

export default connect(mapStateToProps)(CommentList);
