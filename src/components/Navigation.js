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
      <div className="pure-menu pure-menu-horizontal pure-menu-custom">
        <ul className="pure-menu-list">
          <li className="pure-menu-item pure-menu-selected" key="all" onClick={() => {
            this.props.dispatch(changeCategoryFilter('all'));
          }}>
            <Link to="/" className="pure-menu-link pure-menu-link-custom">all</Link>
          </li>
          {this.props.categories.map((category) => (
            <li className="pure-menu-item" key={category.name} onClick={() => {
              this.props.dispatch(changeCategoryFilter(category.name));
            }}>
              <Link to={`/${category.path}`}  className="pure-menu-link pure-menu-link-custom">{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
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
