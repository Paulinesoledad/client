// client/src/pages/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Foods for Glowing Skin",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
    {
      id: 2,
      title: "Easy Workouts to Stay Fit at Home",
      img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    },
    {
      id: 3,
      title: "Morning Habits for a Healthier Life",
      img: "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg",
    },
  ];
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold text-success">
              Welcome to Your Healthy Life Blog
            </h1>
            <p className="lead text-muted">
              Inspiring healthy habits through nutritious food, daily fitness, and intentional living.
            </p>
            <Button variant="success" size="lg">
              Read Latest Post
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
              alt="Healthy Lifestyle"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="text-center mb-4 text-success">Latest Blog Posts</h2>
        <Row>
          {blogPosts.map((post) => (
            <Col key={post.id} md={4} className="mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={post.img}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                    Discover simple tips to eat better, move more, and feel your best every day.
                  </p>
                  <button className="btn btn-success">Read More</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <hr className="my-5" />
        <h2 className="text-center mb-4 text-success">What Our Readers Say</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <div className="bg-white p-4 shadow rounded">
              <p className="fst-italic">"This blog changed my life! I'm eating cleaner and feeling amazing."</p>
              <p className="fw-bold mb-0">– Anita, Lagos</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="bg-white p-4 shadow rounded">
              <p className="fst-italic">"I found a workout routine here that actually works for me!"</p>
              <p className="fw-bold mb-0">– Emeka, Abuja</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="bg-white p-4 shadow rounded">
              <p className="fst-italic">"The recipes are so simple and tasty — my kids even love them!"</p>
              <p className="fw-bold mb-0">– Chioma, Enugu</p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-5" />

        <h2 className="text-center mb-4 text-success">Want More Health Tips?</h2>
        <p className="text-center text-muted mb-4">
          Subscribe to get weekly inspiration, recipes, and workout plans.
        </p>

        <Row className="justify-content-center">
          <Col md={6}>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button type="submit" className="btn btn-success">
                Subscribe
              </button>
            </form>
          </Col>
        </Row>

        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div>
            <p className="mb-1">© 2025 Your Healthy Life Blog</p>
            <div>
              <a href="#" className="text-white me-3 text-decoration-none">Instagram</a>
              <a href="#" className="text-white me-3 text-decoration-none">Facebook</a>
              <a href="#" className="text-white text-decoration-none">YouTube</a>
            </div>
          </div>
      </footer>

      </Container>
    </div>
  );
};

export default Home;
