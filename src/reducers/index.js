const initialCategoriesState = {
  categories: [
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }
  ]
}

function categories (state = initialCategoriesState, action) {
  switch (action.type) {
    default :
      return state
  }
}

export default categories;
