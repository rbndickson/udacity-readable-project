import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostComments, deletePost } from '../utils/api';
import { addComment,
         removePost,
         openEditPostForm,
         closeEditPostForm } from '../actions';
import EditPostForm from './EditPostForm';
import VoteButtons from './VoteButtons';
import { Link } from 'react-router-dom';

class Post extends Component {
  componentDidMount() {
    getPostComments(this.props.id).then(comments => {
      comments.forEach((comment) => {
        this.props.dispatch(addComment(comment))
      });
    });
  }

  handleDelete = () => {
    deletePost(this.props.post.id).then((res) => {
      if (res && res.ok) {
        this.props.dispatch(removePost(this.props.post))
      }
    });
  }

  handleOpenEditForm = () => {
    this.props.dispatch(openEditPostForm(this.props.post.id))
  }

  handleCloseEditForm = () => {
    this.props.dispatch(closeEditPostForm(this.props.post.id))
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <div className="post-parent">
          <div>
            <div className="post-score">
              {post.voteScore}
            </div>
            <VoteButtons voteType='post' id={post.id}/>
            <h3 className="post-title">
              <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            </h3>
          </div>
          <div className="post-body">
            {post.body}
          </div>
          <p className="post-author">
            Posted by {post.author} in {post.category}
          </p>
          <p className="post-date">
            {new Date(post.timestamp).toDateString()} at {new Date(post.timestamp).toLocaleTimeString()}
          </p>
          <p>{this.props.comment_count} Comments</p>
          <div className="buttons">
            <button onClick={this.handleDelete}>Delete Post</button>
            {this.props.editPostFormOpen
              ? <button onClick={this.handleCloseEditForm}>Close Form</button>
              : <button onClick={this.handleOpenEditForm}>Edit Post</button>
            }
          </div>
        </div>
        {this.props.editPostFormOpen && (
          <EditPostForm id={post.id}/>
        )}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const id = ownProps.id;
  const comment_keys = Object.keys(state.comments);
  const comment_count = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === id)
    .length;

  const editPostFormOpen = state.editPostForms[id] ? state.editPostForms[id].editPostFormOpen : false;

  return {
    post: state.posts[id],
    comment_count: comment_count,
    editPostFormOpen: editPostFormOpen,
  };
}

export default connect(mapStateToProps)(Post);
