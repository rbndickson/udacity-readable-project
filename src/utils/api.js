const api = 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPost = (postID) =>
  fetch(`${api}/posts/${postID}`, { headers })
    .then(res => res.json())

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getPostComments = (postID) =>
  fetch(`${api}/posts/${postID}/comments`, { headers })
    .then(res => res.json())

export const upVotePost = (postID) =>
  fetch(`${api}/posts/${postID}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option: 'upVote'})
  }).then(res => res.json())

export const downVotePost = (postID) =>
  fetch(`${api}/posts/${postID}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option: 'downVote'})
  }).then(res => res.json())
