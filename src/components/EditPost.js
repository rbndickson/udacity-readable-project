import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPost, updatePost } from '../utils/api';
import { updateEditPostForm } from '../actions';

class EditPost extends Component {
  componentDidMount() {
    getPost(this.props.match.params.post).then((post) => {
      this.props.dispatch(updateEditPostForm(post));
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    updatePost(
      this.props.postId,
      {
        title: this.props.title,
        body: this.props.body,
      }
    ).then(() => {
      this.setState({ redirect: true });
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updateEditPostForm({
      [name]: value,
    }));
  }

  render() {
    if (this.state && this.state.redirect) {
      return (
        <Redirect to={`/posts/${this.props.postId}`} />
      )
    }
    return (
      <main>
        <div>
          <h2>Edit Post</h2>
          <form className="new-post-form" onSubmit={this.handleSubmit}>
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
        </div>
      </main>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const postId = ownProps.match.params.post;

  return {
    postId: postId,
    title: state.editPostForm.title,
    body: state.editPostForm.body,
  }
}

export default connect(mapStateToProps)(EditPost);
