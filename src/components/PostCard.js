import { Link } from 'react-router-dom';

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
