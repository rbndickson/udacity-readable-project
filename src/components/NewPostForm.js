import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPost } from "../utils/api";
import {
  updateNewPostForm,
  clearNewPostForm,
  addPost,
  closeNewPostForm
} from "../actions";

class NewPostForm extends Component {
  componentWillUnmount() {
    this.props.dispatch(clearNewPostForm());
  }

  handleSubmit = e => {
    e.preventDefault();

    createPost({
      id:
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 14),
      timestamp: Date.now(),
      author: this.props.author,
      title: this.props.title,
      body: this.props.body,
      category: this.props.category
    }).then(post => {
      this.props.dispatch(addPost(post));
      this.props.dispatch(closeNewPostForm());
    });
  };

  handleChange = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(
      updateNewPostForm({
        [name]: value
      })
    );
  };

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to={`/${this.props.category}`} />;
    }
    return (
      <div>
        <h4>Create New Post</h4>
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Your name:
              <input
                name="author"
                type="text"
                value={this.props.author}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Title:
              <input
                name="title"
                type="text"
                value={this.props.title}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Body:
              <textarea
                name="body"
                value={this.props.body}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Category:
              <select
                name="category"
                value={this.props.category}
                onChange={this.handleChange}
              >
                {this.props.categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Add Post</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const category_keys = Object.keys(state.categories);

  return {
    categories: category_keys.map(
      category_key => state.categories[category_key]
    ),
    title: state.newPostForm.title,
    author: state.newPostForm.author,
    body: state.newPostForm.body,
    category: state.newPostForm.category
  };
}

export default connect(mapStateToProps)(NewPostForm);
