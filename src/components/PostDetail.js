import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from "../utils/api";
import { addPost } from "../actions";
import CommentList from "./CommentList";
import Post from "./Post";

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.post;

    getPost(id).then(post => {
      this.props.dispatch(addPost(post));
    });
  }

  render() {
    const { post } = this.props;

    return (
      <main>
        {post && (
          <article key={post.id} className="post">
            <Post id={post.id} />
            {this.props.comment_count > 0 && <CommentList id={post.id} />}
          </article>
        )}
      </main>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.post;

  const comment_keys = Object.keys(state.comments);
  const comment_count = comment_keys
    .map(comment_key => state.comments[comment_key])
    .filter(comment => comment.parentId === id).length;

  return {
    post: state.posts[id],
    comment_count: comment_count
  };
}

export default connect(mapStateToProps)(PostDetail);
