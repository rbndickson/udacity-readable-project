export const OPEN_EDIT_POST_FORM = "OPEN_EDIT_POST_FORM";
export const CLOSE_EDIT_POST_FORM = "CLOSE_EDIT_POST_FORM";

export function openEditPostForm(postId) {
  return {
    type: OPEN_EDIT_POST_FORM,
    postId
  };
}

export function closeEditPostForm(postId) {
  return {
    type: CLOSE_EDIT_POST_FORM,
    postId
  };
}
