import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '15px', padding: '10px' }}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
};

function PostCard({ post }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-success">{post.title}</h5>
        <p className="card-text">{post.snippet}</p>
        <Link to={`/post/${post._id}`} className="btn btn-outline-success btn-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
