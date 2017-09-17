import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, updatePost } from '../utils/api';
import { updateEditPostForm, updateUserInterface, editPost } from '../actions';

class EditPost extends Component {
  componentDidMount() {
    this.props.dispatch(updateEditPostForm(this.props.post));
  }

  handleSubmit = (e) => {
    e.preventDefault()

    updatePost(
      this.props.post.id,
      {
        title: this.props.title,
        body: this.props.body,
      }
    ).then((post) => {
      this.props.dispatch(
        editPost(post)
      );
      this.props.dispatch(
        updateUserInterface(
          {[this.props.post.id]: {
            editPostFormOpen: false,
          }}
        )
      );
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updateEditPostForm({
      [name]: value,
    }));
  }

  render() {
    return (
      <div>
        <h2>Edit Post</h2>
        <form className="edit-post-form" onSubmit={this.handleSubmit}>
          <label>
             Title:
             <input name="title" value={this.props.title} onChange={this.handleChange} />
          </label>
          <label>
             Body:
             <textarea name="body" value={this.props.body} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    post: state.posts[ownProps.id],
    title: state.editPostForm.title,
    body: state.editPostForm.body,
  }
}

export default connect(mapStateToProps)(EditPost);
