import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEditCommentForm, closeEditCommentForm, editComment } from '../actions';
import { updateComment } from '../utils/api';

class EditCommentForm extends Component {
  componentDidMount() {
    this.props.dispatch(updateEditCommentForm({
      commentId: this.props.comment.id,
      field: 'body',
      value: this.props.comment.body,
    }));
  };

  componentWillUnmount() {
    this.props.dispatch(closeEditCommentForm(this.props.comment.id))
  };

  handleSubmit = (e) => {
    e.preventDefault();

    updateComment(
      this.props.comment.id,
      { body: this.props.body }
    ).then((updatedComment) => {
      this.props.dispatch(editComment(updatedComment));
      this.props.dispatch(closeEditCommentForm(this.props.comment.id));
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updateEditCommentForm({
      commentId: this.props.id,
      field: name,
      value: value
    }));
  }

  render() {
    return (
      <main>
        <h3>Update Comment</h3>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea name="body" value={this.props.body} onChange={this.handleChange} />
          <input type="submit" value="Update Comment" />
        </form>
      </main>
    );
  };
}

function mapStateToProps (state, ownProps) {
  return {
    comment: state.comments[ownProps.id],
    body: state.editCommentForms[ownProps.id].body
  }
}

export default connect(mapStateToProps)(EditCommentForm);