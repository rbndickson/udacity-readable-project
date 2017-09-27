import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateNewPostForm, clearNewPostForm, addPost, updateUserInterface } from '../actions';
import { createPost } from '../utils/api';

class NewPostForm extends Component {
  componentWillUnmount() {
    this.props.dispatch(clearNewPostForm());
  }

  handleSubmit = (e) => {
    e.preventDefault()

    createPost(
      {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 14),
        timestamp: Date.now(),
        author: this.props.author,
        title: this.props.title,
        body: this.props.body,
        category: this.props.category,
      }
    ).then((post) => {
      this.props.dispatch(addPost(post))
      this.props.dispatch(updateUserInterface({ newPostFormOpen: false }))
    })
  }

  handleClose = (e) => {
    e.preventDefault();
    this.props.dispatch(updateUserInterface({
      newPostFormOpen: false,
    }))
  }

  handleChange = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updateNewPostForm({
      [name]: value,
    }));
  }

  render() {
    if (this.state && this.state.redirect) {
      return (
        <Redirect to={`/${this.props.category}`} />
      )
    }
    return (
      <div>
        <h3>Create New Post</h3>
        <div className="text-center">
          <a href="#" className="mini-link" onClick={this.handleClose}>Close Form</a>
        </div>
        <form className="new-post-form" onSubmit={this.handleSubmit}>
          <label>
             Your Name:
             <input name="author" value={this.props.author} onChange={this.handleChange} />
          </label>
          <label>
             Title:
             <input name="title" value={this.props.title} onChange={this.handleChange} />
          </label>
          <label>
             Body:
             <textarea name="body" value={this.props.body} onChange={this.handleChange} />
          </label>
          <label>
            Category:
            <select name="category" value={this.props.category} onChange={this.handleChange}>
              {this.props.categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const category_keys = Object.keys(state.categories);

  return {
    categories: category_keys.map(category_key => state.categories[category_key]),
    title: state.newPostForm.title,
    author: state.newPostForm.author,
    body: state.newPostForm.body,
    category: state.newPostForm.category,
  }
}

export default connect(mapStateToProps)(NewPostForm);
