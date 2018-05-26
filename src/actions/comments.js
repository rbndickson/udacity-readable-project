export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment
  };
}

export function removeComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment
  };
}
