/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container fluid className='d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center'>
      <h1 className='display-1 fw-bold text-danger'>404</h1>
      <p className='lead text-muted mb-4'>Oops! The page you're looking for doesn't exist.</p>
      <Link to='/'>
        <Button variant='outline-danger' size='lg'>
          Go Back Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
