import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend
    axios.get('http://localhost:5000/api/blogs')
      .then(res => {
      console.log('Fetched posts:', res.data);
      setPosts(res.data);
    })
    .catch(err => console.error('Failed to load posts:', err));
}, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-success">Our Blog Posts</h2>
      <Row>
        {posts.map(post => (
          <Col md={4} key={post._id} className="mb-4">
            <Card className="h-100 shadow-sm">
              {post.image && (
                <Card.Img variant="top" src={post.image} alt={post.title} />
              )}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.content.slice(0, 100)}...
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;

