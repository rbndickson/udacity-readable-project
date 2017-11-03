import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewPostForm from './NewPostForm';
import { changeCategorySort, openNewPostForm, closeNewPostForm } from '../actions';

class PostListHeader extends Component {

  handleSortChange = (e) => {
    this.props.dispatch(changeCategorySort({
      category: this.props.categoryName,
      sortValue: e.target.value,
    }))
  }

  handleOpenNewPostForm = (e) => {
    e.preventDefault();
    this.props.dispatch(openNewPostForm());
  }

  handleCloseNewPostForm = (e) => {
    e.preventDefault();
    this.props.dispatch(closeNewPostForm());
  }

  render() {
    return (
      <div className="container">
        <h2>{this.props.categoryName}</h2>
        <div className="row">
          <div className="column column-25">
            <select value={this.props.categorySort} onChange={this.handleSortChange}>
              <option value="voteScore">Vote Score</option>
              <option value="timestamp">Recent</option>
            </select>
          </div>
          <div className="column colum-25 column-offset-50">
            {this.props.newPostFormOpen
              ? <button className="secondary-button" onClick={this.handleCloseNewPostForm}>Close</button>
              : <button onClick={this.handleOpenNewPostForm}>Add post</button>
            }
          </div>
        </div>
        {this.props.newPostFormOpen && (
          <NewPostForm />
        )}
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
