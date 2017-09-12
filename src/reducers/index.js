import { combineReducers } from 'redux'

import {
  ADD_CATEGORY,
  CHANGE_CATEGORY_FILTER,
  ADD_POST,
  UPDATE_POST,
  ADD_COMMENT,
  UPDATE_COMMENT,
} from '../actions'

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

function posts (state = {}, action) {
  const { post } = action

  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
        [post.id]: post
      }
    case UPDATE_POST :
      return {
        ...state,
        [post.id]: post
      }
    default :
      return state
  }
}

function comments (state = {}, action) {
  const { comment } = action

  switch (action.type) {
    case ADD_COMMENT :
      return {
        ...state,
        [comment.id]: comment
      }
    case UPDATE_COMMENT :
      return {
        ...state,
        [comment.id]: comment
      }
    default :
      return state
  }
}

export default combineReducers({
  categories,
  categoryFilter,
  posts,
  comments,
})
