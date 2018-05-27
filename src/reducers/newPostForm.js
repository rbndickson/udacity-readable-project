import { OPEN_NEW_POST_FORM, CLOSE_NEW_POST_FORM } from "../actions";

const initialNewPostFormState = {
  newPostFormOpen: false
};

function newPostForm(state = initialNewPostFormState, action) {
  switch (action.type) {
    case OPEN_NEW_POST_FORM:
      return {
        ...state,
        newPostFormOpen: true
      };
    case CLOSE_NEW_POST_FORM:
      return {
        ...state,
        newPostFormOpen: false
      };
    default:
      return state;
  }
}

export default newPostForm;
