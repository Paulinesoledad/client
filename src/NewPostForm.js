import React, { useState } from 'react';
import axios from 'axios';

const NewPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    image: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', formData);
      setSuccess(true);
      setFormData({ title: '', content: '', author: '', image: '' });
    } catch (err) {
      console.error('Failed to submit post:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Blog Post</h2>
      {success && <div className="alert alert-success">Post submitted successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Content</label>
          <textarea name="content" className="form-control" rows="5" value={formData.content} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label>Author</label>
          <input type="text" name="author" className="form-control" value={formData.author} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Image URL (optional)</label>
          <input type="text" name="image" className="form-control" value={formData.image} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
