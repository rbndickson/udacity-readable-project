import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import {
  changeCategoryFilter,
  changeCategorySort,
  updateUserInterface,
} from '../actions';

class Category extends Component {
  updateCategoryFilter() {
    const category = this.props.match.params.category || 'all'

    this.props.dispatch(changeCategoryFilter(category))
  }

  handleSortChange = (e) => {
    this.props.dispatch(changeCategorySort({
      category: this.props.categoryName,
      sortValue: e.target.value,
    }))
  }

  handleNewPostLink = (e) => {
    e.preventDefault();
    this.props.dispatch(updateUserInterface({ newPostFormOpen: true }))
  }

  // For ariving via the URL & Using the navigation
  componentDidMount() { this.updateCategoryFilter() }
  componentDidUpdate() { this.updateCategoryFilter() }

  render() {
    return (
      <main>
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
        <PostList />
      </main>
    );
  }
}

function mapStateToProps (state) {
  const sortBy = state.categorySorts[state.categoryFilter] || 'voteScore';

  return {
    categoryName: state.categoryFilter,
    categorySort: sortBy,
    newPostFormOpen: state.userInterface.newPostFormOpen,
  }
}

export default connect(mapStateToProps)(Category);
