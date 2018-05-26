import {
  OPEN_NEW_POST_FORM,
  CLOSE_NEW_POST_FORM,
  UPDATE_NEW_POST_FORM,
  CLEAR_NEW_POST_FORM
} from "../actions";

const initialNewPostFormState = {
  newPostFormOpen: false,
  title: "",
  author: "",
  body: "",
  category: "react"
};

function newPostForm(state = initialNewPostFormState, action) {
  const { newPostForm } = action;

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
    case UPDATE_NEW_POST_FORM:
      return {
        ...state,
        ...newPostForm
      };
    case CLEAR_NEW_POST_FORM:
      return {
        ...state,
        ...initialNewPostFormState
      };
    default:
      return state;
  }
}

export default newPostForm;
