import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../utils/api';
import { updateEditPostForm,
         closeEditPostForm,
         editPost } from '../actions';

class EditPostForm extends Component {
  componentWillMount() {
    this.props.dispatch(updateEditPostForm({
      postId: this.props.post.id,
      field: 'title',
      value: this.props.post.title
    }));
    this.props.dispatch(updateEditPostForm({
      postId: this.props.post.id,
      field: 'body',
      value: this.props.post.body
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { post, title, body } = this.props;

    updatePost(
      post.id,
      {
        title: title,
        body: body
      }
    ).then((post) => {
      this.props.dispatch(
        editPost(post)
      );
      this.props.dispatch(
        this.props.dispatch(closeEditPostForm(post.id))
      );
    });
  }

  handleChange = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const postId = this.props.post.id;

    this.props.dispatch(updateEditPostForm({
      postId: postId,
      field: name,
      value: value
    }));
  }

  render() {
    return (
      <div>
        <h3>Edit Post</h3>
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
  // So that component is always controlled
  const currentFormTitle = state.editPostForms[ownProps.id].title || ''
  const currentFormBody = state.editPostForms[ownProps.id].body || ''

  return {
    post: state.posts[ownProps.id],
    title: currentFormTitle,
    body: currentFormBody,
  }
}

export default connect(mapStateToProps)(EditPostForm);
