import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchPosts = () => api.get('/posts');
export const createPost = (newPost) => api.post('/posts', newPost);
export const deletePost = (id) => api.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) => api.put(`/posts/${id}`, updatedPost);

export default api;

