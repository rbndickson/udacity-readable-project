export const ADD_CATEGORY = 'ADD_CATEGORY';
export const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_POST_FORM = 'UPDATE_POST_FORM';
export const CLEAR_POST_FORM = 'CLEAR_POST_FORM';

export function addCategory (category) {
  return {
    type: ADD_CATEGORY,
    category,
  }
}

export function changeCategoryFilter (category) {
  return {
    type: CHANGE_CATEGORY_FILTER,
    category,
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post,
  }
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  }
}

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
