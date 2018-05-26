import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteComment } from "../utils/api";
import EditCommentForm from "./EditCommentForm";
import Voting from "./Voting";
import {
  removeComment,
  openEditCommentForm,
  closeEditCommentForm
} from "../actions";

class Comment extends Component {
  handleDelete = () => {
    deleteComment(this.props.comment.id).then(res => {
      if (res && res.ok) {
        this.props.dispatch(removeComment(this.props.comment));
      }
    });
  };

  handleOpenEditForm = () => {
    this.props.dispatch(openEditCommentForm(this.props.comment.id));
  };

  handleCloseEditForm = () => {
    this.props.dispatch(closeEditCommentForm(this.props.comment.id));
  };

  render() {
    const { comment } = this.props;

    return (
      <div className="card-container">
        <div className="card-voting-container">
          <Voting
            voteType="comment"
            id={comment.id}
            voteScore={comment.voteScore}
          />
        </div>
        <div className="card-text-container card-text-container-comments">
          <div className="card-body">{comment.body}</div>
          <div className="card-details">
            <span className="card-author">Posted by {comment.author}, </span>
            <span className="card-date">
              {new Date(comment.timestamp).toDateString()} at{" "}
              {new Date(comment.timestamp).toLocaleTimeString()}
            </span>
          </div>
          <div>
            <button className="button-small" onClick={this.handleDelete}>
              Delete
            </button>
            {this.props.editCommentFormOpen ? (
              <button
                className="secondary-button button-small"
                onClick={this.handleCloseEditForm}
              >
                Close
              </button>
            ) : (
              <button
                className="button-small"
                onClick={this.handleOpenEditForm}
              >
                Edit
              </button>
            )}
          </div>
          {this.props.editCommentFormOpen && (
            <EditCommentForm id={comment.id} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const editCommentFormOpen = state.editCommentForms[ownProps.id]
    ? state.editCommentForms[ownProps.id].editCommentFormOpen
    : false;

  return {
    comment: state.comments[ownProps.id],
    editCommentFormOpen: editCommentFormOpen
  };
}

export default connect(mapStateToProps)(Comment);
