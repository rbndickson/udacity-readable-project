import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../utils/api";
import { removePost, openEditPostForm, closeEditPostForm } from "../actions";
import Button from "./common/Button";

class PostButtons extends Component {
  handleDelete = () => {
    deletePost(this.props.post.id).then(res => {
      if (res && res.ok) {
        this.props.dispatch(removePost(this.props.post));
      }
    });
  };

  handleOpenEditForm = () => {
    this.props.dispatch(openEditPostForm(this.props.post.id));
  };

  handleCloseEditForm = () => {
    this.props.dispatch(closeEditPostForm(this.props.post.id));
  };

  render() {
    return (
      <div>
        <Button text={"Delete"} mods={["small"]} onClick={this.handleDelete} />
        {this.props.editPostFormOpen ? (
          <Button
            text={"Close"}
            mods={["secondary", "small"]}
            onClick={this.handleCloseEditForm}
          />
        ) : (
          <Button
            text={["Edit"]}
            mods={["small"]}
            onClick={this.handleOpenEditForm}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.id;
  const editPostFormOpen = state.editPostForms[id]
    ? state.editPostForms[id].editPostFormOpen
    : false;

  return {
    post: state.posts[id],
    editPostFormOpen: editPostFormOpen
  };
}

export default connect(mapStateToProps)(PostButtons);
