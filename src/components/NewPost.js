import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePostForm, clearPostForm } from '../actions';
import { createPost } from '../utils/api';

class NewPost extends Component {
  componentWillUnmount() {
    this.props.dispatch(clearPostForm());
    console.log('whoa unmounting!');
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
    )
  }

  handleChange = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updatePostForm({
      [name]: value,
    }));
  }

  render() {
    return (
      <main>
        <h2>Create New Post</h2>
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
                <option value={category.name}>{category.name}</option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

function mapStateToProps (state) {
  const category_keys = Object.keys(state.categories);

  return {
    categories: category_keys.map(category_key => state.categories[category_key]),
    title: state.postForm.title,
    author: state.postForm.author,
    body: state.postForm.body,
    category: state.postForm.category,
  }
}

export default connect(mapStateToProps)(NewPost);
