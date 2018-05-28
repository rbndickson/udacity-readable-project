import {
  OPEN_NEW_COMMENT_FORM,
  CLOSE_NEW_COMMENT_FORM
} from "../actions";

function newCommentForms(state = {}, action) {
  switch (action.type) {
    case OPEN_NEW_COMMENT_FORM:
      return {
        ...state,
        [action.postId]: {
          newCommentFormOpen: true
        }
      };
    case CLOSE_NEW_COMMENT_FORM:
      return {
        ...state,
        [action.postId]: {
          newCommentFormOpen: false
        }
      };
    default:
      return state;
  }
}

export default newCommentForms;
