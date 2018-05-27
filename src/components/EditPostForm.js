import React, { Component } from "react";
import { connect } from "react-redux";
import "./EditPostForm.css";
import { updatePost } from "../utils/api";
import { closeEditPostForm, editPost } from "../actions";
import Button from "./Button";

class EditPostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    const { title, body } = this.props.post;

    this.setState({
      title: title,
      body: body
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { id } = this.props.post;
    const { title, body } = this.state;

    updatePost(id, {
      title: title,
      body: body
    }).then(post => {
      this.props.dispatch(editPost(post));
      this.props.dispatch(this.props.dispatch(closeEditPostForm(id)));
    });
  };

  handleChange = e => {
    e.preventDefault();
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { title, body } = this.state;

    return (
      <div className="EditPostForm">
        <h3>Edit Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Body:
            <textarea name="body" value={body} onChange={this.handleChange} />
          </label>
          <Button text={"Update Post"} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const post = state.posts[ownProps.id];

  return {
    post: post
  };
}

export default connect(mapStateToProps)(EditPostForm);
