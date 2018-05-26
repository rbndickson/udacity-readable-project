import { ADD_POST, EDIT_POST, REMOVE_POST } from "../actions";

function posts(state = {}, action) {
  const { post } = action;

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [post.id]: post
      };
    case EDIT_POST:
      return {
        ...state,
        [post.id]: post
      };
    case REMOVE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          deleted: true
        }
      };
    default:
      return state;
  }
}

export default posts;
