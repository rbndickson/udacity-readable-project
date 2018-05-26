import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCategorySort } from "../actions";
import "./PostListHeaderSelect.css";

class PostListHeaderSelect extends Component {
  handleSortChange = e => {
    this.props.dispatch(
      changeCategorySort({
        category: this.props.categoryName,
        sortValue: e.target.value
      })
    );
  };

  render() {
    return (
      <select
        className="PostListHeaderSelect"
        value={this.props.categorySort}
        onChange={this.handleSortChange}
      >
        <option value="voteScore">Vote Score</option>
        <option value="timestamp">Recent</option>
      </select>
    );
  }
}

function mapStateToProps(state) {
  const sortBy = state.categorySorts[state.categoryFilter] || "voteScore";

  return {
    categoryName: state.categoryFilter,
    categorySort: sortBy
  };
}
export default connect(mapStateToProps)(PostListHeaderSelect);
