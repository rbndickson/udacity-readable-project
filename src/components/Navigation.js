import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../utils/api';
import { addCategory, changeCategoryFilter } from '../actions';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  componentDidMount() {
    getCategories().then((categories) => {
      categories.forEach((category) => {
        this.props.dispatch(addCategory(category));
      })
    });
  }

  render() {
    return (
      <nav>
        <ul>
          <li key="all" onClick={() => {
            this.props.dispatch(changeCategoryFilter('all'));
          }}>
            <Link to="/">all</Link>
          </li>
          {this.props.categories.map((category) => (
            <li key={category.name} onClick={() => {
              this.props.dispatch(changeCategoryFilter(category.name));
            }}>
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}


function mapStateToProps (state) {
  const category_keys = Object.keys(state.categories);

  return {
    categories: category_keys.map(category_key => state.categories[category_key]),
  }
}

export default connect(mapStateToProps)(Navigation);
