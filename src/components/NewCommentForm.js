import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateNewCommentForm,
  addComment,
  closeNewCommentForm
} from '../actions';
import { createComment } from '../utils/api';

class NewCommentForm extends Component {
  handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updateNewCommentForm({
      postId: this.props.postId,
      field: name,
      value: value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    createComment({
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 14),
      parentId: this.props.postId,
      timestamp: Date.now(),
      author: this.props.currentFormAuthor,
      body: this.props.currentFormBody
    }).then(comment => {
      this.props.dispatch(addComment(comment));
      this.props.dispatch(closeNewCommentForm(this.props.postId));
    })
  };

  render() {
    return (
      <div className="form-container">
        <form className="new-comment-form" onSubmit={this.handleSubmit}>
          <label>
             Your Name:
             <input name="author" type="text" value={this.props.currentFormAuthor} onChange={this.handleChange} />
          </label>
          <label>
             Body:
             <textarea name="body" value={this.props.currentFormBody} onChange={this.handleChange} />
          </label>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  // So that component is always controlled
  const currentFormAuthor = state.newCommentForms[ownProps.postId].author || ''
  const currentFormBody = state.newCommentForms[ownProps.postId].body || ''

  return {
    postId: ownProps.postId,
    currentFormAuthor: currentFormAuthor,
    currentFormBody: currentFormBody,
  };
}

export default connect(mapStateToProps)(NewCommentForm);
