import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePostForm, clearPostForm } from '../actions';

class NewPost extends Component {
  componentWillUnmount() {
    this.props.dispatch(clearPostForm());
    console.log('whoa unmounting!');
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

function mapStateToProps (state) {
  return {
    title: state.postForm.title,
    author: state.postForm.author,
    body: state.postForm.body,
  }
}

export default connect(mapStateToProps)(NewPost);
