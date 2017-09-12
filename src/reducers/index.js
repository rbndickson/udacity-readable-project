import { combineReducers } from 'redux'

import {
  ADD_CATEGORY,
  CHANGE_CATEGORY_FILTER,
  ADD_POST,
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
  switch (action.type) {
    case ADD_POST :
      const { post } = action

      return {
        ...state,
        [post.id]: post
      }
    default :
      return state
  }
}

export default combineReducers({
  categories,
  categoryFilter,
  posts,
})
