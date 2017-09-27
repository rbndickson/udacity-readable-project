// CATEGORIES

export const ADD_CATEGORY = 'ADD_CATEGORY';

export function addCategory (category) {
  return {
    type: ADD_CATEGORY,
    category,
  }
}

export const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';
export const CHANGE_CATEGORY_SORT = 'CHANGE_CATEGORY_SORT';

export function changeCategoryFilter (category) {
  return {
    type: CHANGE_CATEGORY_FILTER,
    category,
  }
}

export function changeCategorySort ({ category, sortValue }) {
  return {
    type: CHANGE_CATEGORY_SORT,
    category,
    sortValue,
  }
}

// POSTS

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function editPost (post) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function removePost (post) {
  return {
    type: REMOVE_POST,
    post,
  }
}

// COMMENTS

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function editComment (comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  }
}

export function removeComment (comment) {
  return {
    type: REMOVE_COMMENT,
    comment,
  }
}


// NEW POST FORM

export const UPDATE_POST_FORM = 'UPDATE_POST_FORM';
export const CLEAR_POST_FORM = 'CLEAR_POST_FORM';

export function updatePostForm (postForm) {
  return {
    type: UPDATE_POST_FORM,
    postForm
  }
}

export function clearPostForm () {
  return {
    type: CLEAR_POST_FORM,
  }
}

// EDIT POST FORM

export const OPEN_EDIT_POST_FORM = 'OPEN_EDIT_POST_FORM';
export const CLOSE_EDIT_POST_FORM = 'CLOSE_EDIT_POST_FORM';
export const UPDATE_EDIT_POST_FORM = 'UPDATE_EDIT_POST_FORM';

export function openEditPostForm (postId) {
  return {
    type: OPEN_EDIT_POST_FORM,
    postId
  }
}

export function closeEditPostForm (postId) {
  return {
    type: CLOSE_EDIT_POST_FORM,
    postId
  }
}

export function updateEditPostForm ({ postId, field, value }) {
  return {
    type: UPDATE_EDIT_POST_FORM,
    postId,
    field,
    value,
  }
}

// NEW COMMENT FORM

export const OPEN_NEW_COMMENT_FORM = 'OPEN_NEW_COMMENT_FORM';
export const CLOSE_NEW_COMMENT_FORM = 'CLOSE_NEW_COMMENT_FORM';
export const UPDATE_NEW_COMMENT_FORM = 'UPDATE_NEW_COMMENT_FORM';

export function openNewCommentForm (postId) {
  return {
    type: OPEN_NEW_COMMENT_FORM,
    postId
  }
}

export function closeNewCommentForm (postId) {
  return {
    type: CLOSE_NEW_COMMENT_FORM,
    postId
  }
}

export function updateNewCommentForm ({ postId, field, value}) {
  return {
    type: UPDATE_NEW_COMMENT_FORM,
    postId,
    field,
    value,
  }
}

// EDIT COMMENT FORM

export const OPEN_EDIT_COMMENT_FORM = 'OPEN_EDIT_COMMENT_FORM';
export const CLOSE_EDIT_COMMENT_FORM = 'CLOSE_EDIT_COMMENT_FORM';
export const UPDATE_EDIT_COMMENT_FORM = 'UPDATE_EDIT_COMMENT_FORM';

export function openEditCommentForm (commentId) {
  return {
    type: OPEN_EDIT_COMMENT_FORM,
    commentId
  }
}

export function closeEditCommentForm (commentId) {
  return {
    type: CLOSE_EDIT_COMMENT_FORM,
    commentId
  }
}

export function updateEditCommentForm ({ commentId, field, value}) {
  return {
    type: UPDATE_EDIT_COMMENT_FORM,
    commentId,
    field,
    value,
  }
}

export const UPDATE_USER_INTERFACE = 'UPDATE_USER_INTERFACE';

export function updateUserInterface (userInterface) {
  return {
    type: UPDATE_USER_INTERFACE,
    userInterface,
  }
}
