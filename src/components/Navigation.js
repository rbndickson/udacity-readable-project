import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../utils/api';
import { addCategory } from '../actions';

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
          <li>
            <a href="/">all</a>
          </li>
          {this.props.categories.map((category) => (
            <li key={category.name}><a href={category.path}>{category.name}</a></li>
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
