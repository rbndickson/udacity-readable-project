import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewPostForm from './NewPostForm';
import { changeCategorySort, openNewPostForm } from '../actions';

class PostListHeader extends Component {

  handleSortChange = (e) => {
    this.props.dispatch(changeCategorySort({
      category: this.props.categoryName,
      sortValue: e.target.value,
    }))
  }

  handleNewPostLink = (e) => {
    e.preventDefault();
    this.props.dispatch(openNewPostForm());
  }

  render() {
    return (
      <div>
        <h2>{this.props.categoryName}</h2>
        {!this.props.newPostFormOpen && (
          <div className="new-post-link">
            <a href="#" onClick={this.handleNewPostLink}>Add post</a>
          </div>
        )}
        {this.props.newPostFormOpen && (
          <NewPostForm />
        )}
        <div>
          <label>
            Sort by:
            <select value={this.props.categorySort} onChange={this.handleSortChange}>
              <option value="voteScore">Vote Score</option>
              <option value="timestamp">Recent</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const sortBy = state.categorySorts[state.categoryFilter] || 'voteScore';

  return {
    categoryName: state.categoryFilter,
    categorySort: sortBy,
    newPostFormOpen: state.newPostForm.newPostFormOpen,
  }
}

export default connect(mapStateToProps)(PostListHeader);
