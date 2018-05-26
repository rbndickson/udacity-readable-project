import {
  OPEN_EDIT_COMMENT_FORM,
  CLOSE_EDIT_COMMENT_FORM,
  UPDATE_EDIT_COMMENT_FORM
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
    case UPDATE_EDIT_COMMENT_FORM:
      return {
        ...state,
        [action.commentId]: {
          ...state[action.commentId],
          [action.field]: action.value
        }
      };
    default:
      return state;
  }
}

export default editCommentForms;
