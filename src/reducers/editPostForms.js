import {
  OPEN_EDIT_POST_FORM,
  CLOSE_EDIT_POST_FORM,
  UPDATE_EDIT_POST_FORM
} from '../actions';

function editPostForms (state = {}, action) {
  switch (action.type) {
    case OPEN_EDIT_POST_FORM :
      return {
        ...state,
        [action.postId]: {
          editPostFormOpen: true
        }
      };
    case CLOSE_EDIT_POST_FORM :
      return {
        ...state,
        [action.postId]: {
          editPostFormOpen: false
        }
      };
    case UPDATE_EDIT_POST_FORM :
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          [action.field]: action.value
        }
      };
    default :
      return state;
  }
}

export default editPostForms;
