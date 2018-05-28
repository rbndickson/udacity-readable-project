import {
  OPEN_EDIT_COMMENT_FORM,
  CLOSE_EDIT_COMMENT_FORM,
} from "../actions";

function editCommentForms(state = {}, action) {
  switch (action.type) {
    case OPEN_EDIT_COMMENT_FORM:
      return {
        ...state,
        [action.commentId]: {
          editCommentFormOpen: true
        }
      };
    case CLOSE_EDIT_COMMENT_FORM:
      return {
        ...state,
        [action.commentId]: {
          editCommentFormOpen: false
        }
      };
    default:
      return state;
  }
}

export default editCommentForms;
