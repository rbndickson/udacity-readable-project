export const OPEN_NEW_POST_FORM = "OPEN_NEW_POST_FORM";
export const CLOSE_NEW_POST_FORM = "CLOSE_NEW_POST_FORM";
export const UPDATE_NEW_POST_FORM = "UPDATE_NEW_POST_FORM";
export const CLEAR_NEW_POST_FORM = "CLEAR_NEW_POST_FORM";

export function openNewPostForm() {
  return {
    type: OPEN_NEW_POST_FORM
  };
}

export function closeNewPostForm() {
  return {
    type: CLOSE_NEW_POST_FORM
  };
}

export function updateNewPostForm(newPostForm) {
  return {
    type: UPDATE_NEW_POST_FORM,
    newPostForm
  };
}

export function clearNewPostForm() {
  return {
    type: CLEAR_NEW_POST_FORM
  };
}
