import { combineReducers } from 'redux'

import {
  ADD_CATEGORY,
  CHANGE_CATEGORY_FILTER,
  CHANGE_CATEGORY_SORT,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  UPDATE_POST_FORM,
  CLEAR_POST_FORM,
  UPDATE_EDIT_POST_FORM,
  UPDATE_USER_INTERFACE,
  UPDATE_COMMENT_FORM,
  CLEAR_COMMENT_FORM,
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
    case REMOVE_POST :
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          deleted: true,
        }
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
    case REMOVE_COMMENT :
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          deleted: true,
        }
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


const initialCommentFormState = {
  author: '',
  body: '',
}

function commentForm (state = initialCommentFormState, action) {
  const { updatedField } = action

  switch (action.type) {
    case UPDATE_COMMENT_FORM :
      return {
        ...state,
        ...updatedField
      }
    case CLEAR_COMMENT_FORM :
      return {
        ...state,
        ...initialCommentFormState
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
  commentForm,
  userInterface,
})
