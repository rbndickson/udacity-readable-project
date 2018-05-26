import React, { Component } from "react";
import { connect } from "react-redux";
import { openNewCommentForm, closeNewCommentForm } from "../actions";

class CommentListHeader extends Component {
  openNewCommentForm = () => {
    this.props.dispatch(openNewCommentForm(this.props.postId));
  };

  closeNewCommentForm = () => {
    this.props.dispatch(closeNewCommentForm(this.props.postId));
  };

  render() {
    return (
      <div>
        <h4>Comments ({this.props.commentCount})</h4>
        <div className="comment-list-header-button">
          {this.props.newCommentFormOpen ? (
            <div>
              <button
                className="button-small"
                onClick={this.closeNewCommentForm}
              >
                Close
              </button>
            </div>
          ) : (
            <button className="button-small" onClick={this.openNewCommentForm}>
              Add New Comment
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default connect()(CommentListHeader);
