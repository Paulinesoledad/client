import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../services/api";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Error fetching post:", err));
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    api
      .delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => navigate("/blog"))
      .catch((err) => console.error("Error deleting post:", err));
  };

  if (!post) return <div className="text-center mt-5">Loading...</div>;

  return (
  <div className="d-flex justify-content-center align-items-center py-5 px-3 bg-light">
    <div className="card p-4 shadow" style={{ maxWidth: "700px", width: "100%" }}>
      <h2 className="text-center text-dark mb-3">{post.title}</h2>
      <p className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
        Posted on {new Date(post.createdAt).toLocaleDateString()}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt="Post cover"
          className="img-fluid rounded mb-3"
          style={{ maxHeight: "300px", objectFit: "cover" }}
        />
      )}
      <hr />
      <p style={{ whiteSpace: "pre-line", lineHeight: "1.6", fontSize: "1.1rem" }}>
        {post.content}
      </p>

      {localStorage.getItem("token") && (
        <div className="mt-4 d-flex justify-content-center gap-3">
          <Link to={`/edit/${post._id}`} className="btn btn-outline-primary px-4">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-outline-danger px-4">
            Delete
          </button>
        </div>
      )}

      <div className="text-center mt-4">
        <Link to={`/edit/${post._id}`} className="btn btn-outline-dark px-4 me-2">
          Edit Post
        </Link>

        <Link to="/blog" className="btn btn-dark px-4">
          Back to Blog
        </Link>
      </div>

    </div>
  </div>
);

};

export default ViewPost;
