import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from "../actions";

function comments(state = {}, action) {
  const { comment } = action;

  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };
    case EDIT_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          deleted: true
        }
      };
    default:
      return state;
  }
}

export default comments;
