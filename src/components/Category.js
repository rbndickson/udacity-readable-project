import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { changeCategoryFilter, changeCategorySort } from '../actions';
import { Link } from 'react-router-dom';

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

  // For ariving via the URL & Using the navigation
  componentDidMount() { this.updateCategoryFilter() }
  componentDidUpdate() { this.updateCategoryFilter() }

  render() {
    return (
      <main>
        <h2>{this.props.categoryName}</h2>
        <div className="new-post-link">
          <Link to="/posts/new">Add post</Link>
        </div>
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
  return {
    categoryName: state.categoryFilter,
    categorySort: state.categorySorts[state.categoryFilter],
  }
}

export default connect(mapStateToProps)(Category);
