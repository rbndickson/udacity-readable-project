import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostComments, deletePost } from '../utils/api';
import { addComment, removePost, updateUserInterface } from '../actions';
import CommentList from './CommentList';
import EditPostForm from './EditPostForm';
import VoteButtons from './VoteButtons';
import { Link } from 'react-router-dom';

class Post extends Component {
  componentDidMount() {
    getPostComments(this.props.id).then(comments => {
      comments.forEach((comment) => {
        this.props.dispatch(addComment(comment));
      })
    })
  }

  render() {
    const { post } = this.props
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
            Posted by {post.author}
          </p>
          <p className="post-date">
            {new Date(post.timestamp).toDateString()} at {new Date(post.timestamp).toLocaleTimeString()}
          </p>
          <button onClick={ () => {
            deletePost(post.id).then((res) => {
              if (res && res.ok) {
                this.props.dispatch(removePost(post))
              }
            })
          }}>Delete Post</button>
          <button onClick={ () => {
            this.props.dispatch(updateUserInterface(
              {[post.id]: {
                editPostFormOpen: true,
              }}
            ));
          }}>Edit Post</button>
        </div>
        {this.props.editPostFormOpen && (
          <EditPostForm id={post.id}/>
        )}
        {this.props.comment_count > 0 && (
          <CommentList id={post.id}/>
        )}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const postId = ownProps.id;
  const comment_keys = Object.keys(state.comments);
  const comment_count = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === postId)
    .length

  const editPostFormOpen = state.userInterface[postId] ? state.userInterface[postId].editPostFormOpen : false

  return {
    post: state.posts[ownProps.id],
    comment_count: comment_count,
    editPostFormOpen: editPostFormOpen,
  }
}

export default connect(mapStateToProps)(Post);
