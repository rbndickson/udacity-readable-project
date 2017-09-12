import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { changeCategoryFilter } from '../actions';

class Main extends Component {
  updateCategoryFilter() {
    const category = this.props.match.params.category || 'all'

    this.props.dispatch(changeCategoryFilter(category))
  }

  // For ariving via the URL & Using the navigation
  componentDidMount() { this.updateCategoryFilter() }
  componentDidUpdate() { this.updateCategoryFilter() }

  render() {
    return (
      <main>
        <h2>{this.props.categoryName}</h2>
        <PostList />
      </main>
    );
  }
}

function mapStateToProps (state) {
  return {
    categoryName: state.categoryFilter,
  }
}

export default connect(mapStateToProps)(Main);
