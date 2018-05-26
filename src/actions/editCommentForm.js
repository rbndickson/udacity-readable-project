export const OPEN_EDIT_COMMENT_FORM = "OPEN_EDIT_COMMENT_FORM";
export const CLOSE_EDIT_COMMENT_FORM = "CLOSE_EDIT_COMMENT_FORM";
export const UPDATE_EDIT_COMMENT_FORM = "UPDATE_EDIT_COMMENT_FORM";

export function openEditCommentForm(commentId) {
  return {
    type: OPEN_EDIT_COMMENT_FORM,
    commentId
  };
}

export function closeEditCommentForm(commentId) {
  return {
    type: CLOSE_EDIT_COMMENT_FORM,
    commentId
  };
}

export function updateEditCommentForm({ commentId, field, value }) {
  return {
    type: UPDATE_EDIT_COMMENT_FORM,
    commentId,
    field,
    value
  };
}
