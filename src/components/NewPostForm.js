import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewPostForm.css";
import { createPost } from "../utils/api";
import { createId } from "../utils/helpers";
import { addPost, closeNewPostForm } from "../actions";
import Button from "./Button";

class NewPostForm extends Component {
  state = {
    author: "",
    title: "",
    body: "",
    category: "react"
  };

  handleSubmit = e => {
    e.preventDefault();

    createPost({
      id: createId(),
      timestamp: Date.now(),
      author: this.state.author,
      title: this.state.title,
      body: this.state.body,
      category: this.state.category
    }).then(post => {
      this.props.dispatch(addPost(post));
      this.props.dispatch(closeNewPostForm());
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
    return (
      <form className={"NewPostForm"} onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            Your name:
            <input
              name="author"
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={this.state.title}
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
          <label>
            Category:
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              {this.props.categories.map(category => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <Button text={"Add Post"} />
        </fieldset>
      </form>
    );
  }
}

function mapStateToProps(state) {
  const categories = Object.keys(state.categories).map(
    category_key => state.categories[category_key]
  );

  return {
    categories: categories
  };
}

export default connect(mapStateToProps)(NewPostForm);
