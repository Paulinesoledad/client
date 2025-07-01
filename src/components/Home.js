import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from './services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
