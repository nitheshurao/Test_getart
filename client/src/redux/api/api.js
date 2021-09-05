import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url)

// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post('/posts', newPost);
// const API = axios.create({ baseURL: 'http://localhost:5000' });
// export const createPost = (newPost) => API.post('/posts', newPost);
// // export const fetchPost = (id) => API.get(`/posts/${id}`);
// // export const fetchPosts = (page) => API.get(`/posts?page=${page}`);


// export const fetchPosts = () => axios.get(url);