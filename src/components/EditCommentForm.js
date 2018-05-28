import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComment } from "../utils/api";
import {
  closeEditCommentForm,
  editComment
} from "../actions";
import Button from "./common/Button";

class EditCommentForm extends Component {
  state = {
    body: ''
  }

  componentDidMount() {
    this.setState({
      body: this.props.comment.body
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { body } = this.state
    const { dispatch, comment } = this.props
    updateComment(comment.id, { body: body }).then(
      updatedComment => {
        dispatch(editComment(updatedComment));
        dispatch(closeEditCommentForm(comment.id));
      }
    );
  };

  handleChange = e => {
    e.preventDefault();
    const target = e.target;

    this.setState({
      body: target.value
    })
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <Button text={"Update Comment"} />
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    comment: state.comments[ownProps.id],
    body: state.editCommentForms[ownProps.id].body
  };
}

export default connect(mapStateToProps)(EditCommentForm);
