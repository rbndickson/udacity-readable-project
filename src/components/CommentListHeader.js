import React, { Component } from "react";
import { connect } from "react-redux";
import { openNewCommentForm, closeNewCommentForm } from "../actions";
import Button from "./common/Button";

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
        <h4>Comments ({this.props.commentCount || 0})</h4>
        <div className="comment-list-header-button">
          {this.props.newCommentFormOpen ? (
            <div>
              <Button
                text={"Close"}
                mods={["secondary"]}
                onClick={this.closeNewCommentForm}
              />
            </div>
          ) : (
            <Button
              text={"Add New Comment"}
              onClick={this.openNewCommentForm}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect()(CommentListHeader);
