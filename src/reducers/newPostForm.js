import {
  UPDATE_NEW_POST_FORM,
  CLEAR_NEW_POST_FORM
} from '../actions';

const initialNewPostFormState = {
  title: '',
  author: '',
  body: '',
  category: 'react'
}

function newPostForm (state = initialNewPostFormState, action) {
  const { newPostForm } = action

  switch (action.type) {
    case UPDATE_NEW_POST_FORM :
      return {
        ...state,
        ...newPostForm
      }
    case CLEAR_NEW_POST_FORM :
      return {
        ...state,
        ...initialNewPostFormState
      }
    default :
      return state
  }
}

export default newPostForm;
