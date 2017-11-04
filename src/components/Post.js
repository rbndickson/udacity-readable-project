import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostComments } from '../utils/api';
import { addComment } from '../actions';
import EditPostForm from './EditPostForm';
import Voting from './Voting';
import PostButtons from './PostButtons';
import { Link } from 'react-router-dom';

class Post extends Component {
  componentDidMount() {
    getPostComments(this.props.id).then(comments => {
      comments.forEach((comment) => {
        this.props.dispatch(addComment(comment))
      });
    });
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <div className="card-container">
          <div className="card-voting-container">
            <Voting
              voteType='post'
              id={post.id}
              voteScore={post.voteScore}
            />
          </div>
          <div className="card-text-container">
            <h3 className="card-title">
              <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            </h3>
            <div className="card-body">
              {post.body}
            </div>
            <p className="card-author">
              Posted by {post.author} in {post.category}
            </p>
            <p className="card-date">
              {new Date(post.timestamp).toDateString()} at {new Date(post.timestamp).toLocaleTimeString()}
            </p>
            <p>{this.props.comment_count} Comments</p>
            <PostButtons id={post.id}/>
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
