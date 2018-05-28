import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../utils/api";
import { addComment, closeNewCommentForm } from "../actions";
import Button from "./common/Button";

class NewCommentForm extends Component {
  state = {
    author: "",
    body: ""
  };

  handleChange = e => {
    e.preventDefault();
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { author, body } = this.state;
    const { postId, dispatch } = this.props;

    createComment({
      id:
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 14),
      parentId: postId,
      timestamp: Date.now(),
      author: author,
      body: body
    }).then(comment => {
      dispatch(addComment(comment));
      dispatch(closeNewCommentForm(postId));
    });
  };

  render() {
    return (
      <div className="form-container">
        <form className="new-comment-form" onSubmit={this.handleSubmit}>
          <label>
            Your Name:
            <input
              name="author"
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Body:
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </label>
          <Button text={"Add Comment"} />
        </form>
      </div>
    );
  }
}

export default connect()(NewCommentForm);
