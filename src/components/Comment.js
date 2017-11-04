import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditCommentForm from './EditCommentForm';
import Voting from './Voting';
import { deleteComment } from '../utils/api';
import { removeComment, openEditCommentForm, closeEditCommentForm } from '../actions';

class Comment extends Component {
  handleDelete = () => {
    deleteComment(this.props.comment.id).then((res) => {
      if (res && res.ok) {
        this.props.dispatch(removeComment(this.props.comment));
      }
    })
  }

  handleOpenEditForm = () => {
    this.props.dispatch(openEditCommentForm(this.props.comment.id))
  }

  handleCloseEditForm = () => {
    this.props.dispatch(closeEditCommentForm(this.props.comment.id))
  }

  render() {
    const { comment } = this.props;

    return (
      <div className="card-container">
        <div className="card-voting-container">
          <Voting
            voteType='comment'
            id={comment.id}
            voteScore={comment.voteScore}
          />
        </div>
        <div className="card-text-container">
          <div className="card-body">
            {comment.body}
          </div>
          <p className="card-author">
            Posted by {comment.author}
          </p>
          <p className="card-date">
            {new Date(comment.timestamp).toDateString()} at {new Date(comment.timestamp).toLocaleTimeString()}
          </p>
          <div>
            <button onClick={this.handleDelete}>Delete</button>
            {this.props.editCommentFormOpen
              ? <button onClick={this.handleCloseEditForm}>Close Form</button>
              : <button onClick={this.handleOpenEditForm}>Edit Comment</button>
            }
          </div>
          {this.props.editCommentFormOpen && (
            <EditCommentForm id={comment.id}/>
          )}
          <hr/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const editCommentFormOpen = state.editCommentForms[ownProps.id] ? state.editCommentForms[ownProps.id].editCommentFormOpen : false

  return {
    comment: state.comments[ownProps.id],
    editCommentFormOpen: editCommentFormOpen,
  }
}

export default connect(mapStateToProps)(Comment);
