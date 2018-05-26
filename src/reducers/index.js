import { combineReducers } from "redux";
import posts from "./posts";
import newPostForm from "./newPostForm";
import editPostForms from "./editPostForms";
import comments from "./comments";
import newCommentForms from "./newCommentForms";
import editCommentForms from "./editCommentForms";

import {
  ADD_CATEGORY,
  CHANGE_CATEGORY_FILTER,
  CHANGE_CATEGORY_SORT
} from "../actions";

function categories(state = {}, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      const { category } = action;

      return {
        ...state,
        [category.name]: category
      };
    default:
      return state;
  }
}

function categoryFilter(state = "all", action) {
  switch (action.type) {
    case CHANGE_CATEGORY_FILTER:
      return action.category;
    default:
      return state;
  }
}

function categorySorts(state = {}, action) {
  switch (action.type) {
    case CHANGE_CATEGORY_SORT:
      return {
        ...state,
        [action.category]: action.sortValue
      };
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  categoryFilter,
  categorySorts,
  posts,
  newPostForm,
  editPostForms,
  comments,
  newCommentForms,
  editCommentForms
});
