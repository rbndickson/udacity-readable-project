import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NewPostForm from "./NewPostForm";

class NewPost extends Component {
  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to={`/${this.props.category}`} />;
    }
    return (
      <div>
        <h4>Create New Post</h4>
        <NewPostForm />
      </div>
    );
  }
}

export default NewPost;
