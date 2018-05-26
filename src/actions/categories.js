export const ADD_CATEGORY = "ADD_CATEGORY";
export const CHANGE_CATEGORY_FILTER = "CHANGE_CATEGORY_FILTER";
export const CHANGE_CATEGORY_SORT = "CHANGE_CATEGORY_SORT";

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category
  };
}

export function changeCategoryFilter(category) {
  return {
    type: CHANGE_CATEGORY_FILTER,
    category
  };
}

export function changeCategorySort({ category, sortValue }) {
  return {
    type: CHANGE_CATEGORY_SORT,
    category,
    sortValue
  };
}
