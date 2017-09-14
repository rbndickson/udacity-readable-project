import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateCommentForm,
  clearCommentForm,
  updateUserInterface,
  addComment,
} from '../actions';
import { createComment } from '../utils/api';

class CommentForm extends Component {
  componentWillUnmount() {
    this.props.dispatch(updateUserInterface(
      { [this.props.parentId]: { commentFormOpen: false, } }
    ));
  }
  handleSubmit = (e) => {
    e.preventDefault()

    createComment(
      {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 14),
        parentId: this.props.parentId,
        timestamp: Date.now(),
        author: this.props.author,
        title: this.props.title,
        body: this.props.body,
        category: this.props.category,
      }
    ).then((res) => {
      this.props.dispatch(clearCommentForm());
      this.props.dispatch(updateUserInterface(
        { [this.props.parentId]: { commentFormOpen: false, } }
      ));
      this.props.dispatch(addComment(res));
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updateCommentForm({
      [name]: value,
    }));
  }

  render() {
    return (
      <main>
        <h2>Add Comment</h2>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <label>
             Your Name:
             <input name="author" value={this.props.author} onChange={this.handleChange} />
          </label>
          <label>
             Body:
             <textarea name="body" value={this.props.body} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    parentId: ownProps.parentId,
    title: state.commentForm.title,
    author: state.commentForm.author,
    body: state.commentForm.body,
  }
}

export default connect(mapStateToProps)(CommentForm);
