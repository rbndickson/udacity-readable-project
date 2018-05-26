import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";
import { capitalize } from "../utils/helpers";
import { addCategory, changeCategoryFilter } from "../actions";

class Navigation extends Component {
  componentDidMount() {
    getCategories().then(categories => {
      categories.forEach(category => {
        this.props.dispatch(addCategory(category));
      });
    });
  }

  render() {
    return (
      <nav>
        <ul>
          <li
            key="all"
            onClick={() => {
              this.props.dispatch(changeCategoryFilter("all"));
            }}
          >
            <Link
              to="/"
              className={
                this.props.currentCategory === "all"
                  ? "active-nav-link"
                  : "inactive-nav-link"
              }
            >
              All
            </Link>
          </li>
          {this.props.categories.map(category => (
            <li
              key={category.name}
              onClick={() => {
                this.props.dispatch(changeCategoryFilter(category.name));
              }}
            >
              <Link
                to={`/${category.path}`}
                className={
                  this.props.currentCategory === category.name
                    ? "active-nav-link"
                    : "inactive-nav-link"
                }
              >
                {capitalize(category.name)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const category_keys = Object.keys(state.categories);

  return {
    currentCategory: state.categoryFilter,
    categories: category_keys.map(
      category_key => state.categories[category_key]
    )
  };
}

export default connect(mapStateToProps)(Navigation);
