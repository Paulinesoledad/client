import { useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  return <h2>Editing Post with ID: {id}</h2>;
}

export default EditPost;
