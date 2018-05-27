export const OPEN_NEW_POST_FORM = "OPEN_NEW_POST_FORM";
export const CLOSE_NEW_POST_FORM = "CLOSE_NEW_POST_FORM";

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
