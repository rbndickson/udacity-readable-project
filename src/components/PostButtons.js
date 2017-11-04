import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../utils/api';
import { removePost,
         openEditPostForm,
         closeEditPostForm } from '../actions';

class PostButtons extends Component {
  handleDelete = () => {
    deletePost(this.props.post.id).then((res) => {
      if (res && res.ok) {
        this.props.dispatch(removePost(this.props.post))
      }
    });
  }

  handleOpenEditForm = () => {
    this.props.dispatch(openEditPostForm(this.props.post.id))
  }

  handleCloseEditForm = () => {
    this.props.dispatch(closeEditPostForm(this.props.post.id))
  }

  render() {
    const { post } = this.props;

    return (
      <div className="buttons">
        <button className="button-small" onClick={this.handleDelete}>Delete</button>
        {this.props.editPostFormOpen
          ? <button className="secondary-button button-small" onClick={this.handleCloseEditForm}>Close</button>
          : <button className="button-small" onClick={this.handleOpenEditForm}>Edit</button>
        }
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const id = ownProps.id;
  const editPostFormOpen = state.editPostForms[id] ? state.editPostForms[id].editPostFormOpen : false;

  return {
    post: state.posts[id],
    editPostFormOpen: editPostFormOpen,
  };
}

export default connect(mapStateToProps)(PostButtons);
