import { useParams } from 'react-router-dom';

function ViewPost() {
  const { id } = useParams();
  return <h2>Viewing Post with ID: {id}</h2>;
}

export default ViewPost;
