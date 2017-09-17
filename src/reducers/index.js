import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';
import editCommentForms from './editCommentForms';
import newCommentForms from './newCommentForms';

import {
  ADD_CATEGORY,
  CHANGE_CATEGORY_FILTER,
  CHANGE_CATEGORY_SORT,
  UPDATE_POST_FORM,
  CLEAR_POST_FORM,
  UPDATE_EDIT_POST_FORM,
  UPDATE_USER_INTERFACE
} from '../actions';

function categories (state = {}, action) {
  switch (action.type) {
    case ADD_CATEGORY :
      const { category } = action

      return {
        ...state,
        [category.name]: category
      }
    default :
      return state
  }
}

function categoryFilter (state = 'all', action) {
  switch (action.type) {
    case CHANGE_CATEGORY_FILTER :
      return action.category
    default :
      return state
  }
}

function categorySorts (state = {}, action) {
  switch (action.type) {
    case CHANGE_CATEGORY_SORT :
      return {
        ...state,
        [action.category]: action.sortValue
      }
    default :
      return state
  }
}

const initialPostFormState = {
  title: '',
  author: '',
  body: '',
  category: 'react'
}

function postForm (state = initialPostFormState, action) {
  const { postForm } = action

  switch (action.type) {
    case UPDATE_POST_FORM :
      return {
        ...state,
        ...postForm
      }
    case CLEAR_POST_FORM :
      return {
        ...state,
        ...initialPostFormState
      }
    default :
      return state
  }
}

// Otherwise the form is rendered before the state has been set and it cannot
// call props.title
const initialEditPostFormState = {
  title: '',
  body: '',
}

function editPostForm (state = initialEditPostFormState, action) {
  const { editPostForm } = action

  switch (action.type) {
    case UPDATE_EDIT_POST_FORM :
      return {
        ...state,
        ...editPostForm
      }
    default :
      return state
  }
}

const userInterfaceInitialState = {
  newPostFormOpen: false,
}

function userInterface (state = userInterfaceInitialState, action) {
  const { userInterface } = action

  switch (action.type) {
    case UPDATE_USER_INTERFACE :
      return {
        ...state,
        ...userInterface
      }
    default :
      return state
  }
}

export default combineReducers({
  categories,
  categoryFilter,
  categorySorts,
  posts,
  comments,
  postForm,
  editPostForm,
  newCommentForms,
  editCommentForms,
  userInterface,
})
