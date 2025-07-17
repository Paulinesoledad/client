import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../services/api';


const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the existing post data
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost({ title: response.data.title, content: response.data.content });
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch post', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/posts/${id}`, post);
      navigate(`/post/${id}`);
    } catch (error) {
      console.error('Failed to update post', error);
    }
  };

  if (loading) return <p>Loading post...</p>;

  return (
  <div className="container mt-5" style={{ maxWidth: '600px' }}>
    <h2 className="mb-4">Edit Blog Post</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          value={post.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Content</label>
        <textarea
          id="content"
          name="content"
          className="form-control"
          rows="6"
          value={post.content}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-success px-4">Update</button>
        <button
          type="button"
          className="btn btn-secondary px-4"
          onClick={() => navigate(`/view/${id}`)}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
);

};

export default EditPost;
