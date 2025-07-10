import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/posts',
});

export const fetchPosts = () => API.get('/');
export const createPost = (newPost) => API.post('/', newPost);
export const deletePost = (id) => API.delete(`/${id}`);
export const updatePost = (id, updatedPost) => API.put(`/${id}`, updatedPost);
export default axios.create({baseURL: 'http://localhost:5000/api'});
