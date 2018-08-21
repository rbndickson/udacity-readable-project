import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPostComments } from "../utils/api";
import { capitalize } from "../utils/helpers";
import "./Post.css";
import { addComment } from "../actions";
import PostButtons from "./PostButtons";
import Voting from "./common/Voting";
import EditPostForm from "./EditPostForm";

class Post extends Component {
  componentDidMount() {
    getPostComments(this.props.id).then(comments => {
      comments.forEach(comment => {
        this.props.dispatch(addComment(comment));
      });
    });
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <div>
          <Voting voteType="post" id={post.id} voteScore={post.voteScore} />
          <div className="Post-main">
            <h3 className="Post-title">
              <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
            </h3>
            <div>{post.body}</div>
            <div>
              <span className="Post-author">
                Posted by {post.author} in {capitalize(post.category)},{" "}
              </span>
              <span className="Post-date">
                {new Date(post.timestamp).toDateString()} at{" "}
                {new Date(post.timestamp).toLocaleTimeString()}
              </span>
            </div>
            <div>
              <span>{this.props.commentCount} Comments</span>
              <PostButtons id={post.id} />
            </div>
          </div>
        </div>
        {this.props.editPostFormOpen && <EditPostForm id={post.id} />}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.id;
  const comment_keys = Object.keys(state.comments);
  const commentCount = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === id).length;

  const editPostFormOpen = state.editPostForms[id]
    ? state.editPostForms[id].editPostFormOpen
    : false;

  return {
    post: state.posts[id],
    commentCount: commentCount,
    editPostFormOpen: editPostFormOpen
  };
}

export default connect(mapStateToProps)(Post);
