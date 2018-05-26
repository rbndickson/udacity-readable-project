import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../utils/api";
import "./PostList.css";
import { addPost, closeEditPostForm } from "../actions";
import Post from "./Post";

class PostList extends Component {
  componentDidMount() {
    getPosts().then(posts => {
      posts.forEach(post => {
        this.props.dispatch(addPost(post));
        this.props.dispatch(closeEditPostForm(post.id));
      });
    });
  }

  compareForHighestScore = (a, b) => {
    if (a.voteScore < b.voteScore) {
      return 1;
    }
    if (a.voteScore > b.voteScore) {
      return -1;
    }
    return 0;
  };

  compareForMostRecent = (a, b) => {
    if (a.timestamp < b.timestamp) {
      return 1;
    }
    if (a.timestamp > b.timestamp) {
      return -1;
    }
    return 0;
  };

  render() {
    const { posts } = this.props;

    return (
      <ul>
        {this.props.sortBy === "voteScore" &&
          posts.sort(this.compareForHighestScore).map(post => (
            <li key={post.id} className="PostList-item">
              <Post id={post.id} />
            </li>
          ))}
        {this.props.sortBy === "timestamp" &&
          posts.sort(this.compareForMostRecent).map(post => (
            <li key={post.id} className="PostList-item">
              <Post id={post.id} />
            </li>
          ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const post_keys = Object.keys(state.posts);

  const allPosts = post_keys
    .map(post_key => state.posts[post_key])
    .filter(post => post.deleted === false);

  const posts =
    state.categoryFilter === "all"
      ? allPosts
      : allPosts.filter(post => post.category === state.categoryFilter);

  const sortBy = state.categorySorts[state.categoryFilter] || "voteScore";

  return {
    posts: posts,
    sortBy: sortBy
  };
}

export default connect(mapStateToProps)(PostList);
