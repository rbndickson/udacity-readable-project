import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCategoryFilter } from "../actions";
import PostList from "./PostList";
import PostListHeader from "./PostListHeader";

class Category extends Component {
  updateCategoryFilter() {
    const category = this.props.match.params.category || "all";

    this.props.dispatch(changeCategoryFilter(category));
  }

  // For ariving via the URL & Using the navigation
  componentDidMount() {
    this.updateCategoryFilter();
  }
  componentDidUpdate() {
    this.updateCategoryFilter();
  }

  render() {
    return (
      <main>
        <PostListHeader />
        <PostList />
      </main>
    );
  }
}

export default connect()(Category);
