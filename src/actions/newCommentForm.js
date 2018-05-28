export const OPEN_NEW_COMMENT_FORM = "OPEN_NEW_COMMENT_FORM";
export const CLOSE_NEW_COMMENT_FORM = "CLOSE_NEW_COMMENT_FORM";

export function openNewCommentForm(postId) {
  return {
    type: OPEN_NEW_COMMENT_FORM,
    postId
  };
}

export function closeNewCommentForm(postId) {
  return {
    type: CLOSE_NEW_COMMENT_FORM,
    postId
  };
}
