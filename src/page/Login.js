import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user function');
    setAuthenticate(true);
    navigate('/');
  };

  return (
    <Container className='login-container'>
      <h1>Login</h1>
      <p>Enjoy various services and benefits of InnerRadiance</p>
      <Form onSubmit={loginUser}>
        <Form.Group className='mb-3 login-input' controlId='formBasicEmail'>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Enter email')}
          />
        </Form.Group>

        <Form.Group className='mb-3 login-input' controlId='formBasicPassword'>
          <Form.Control
            type='password'
            placeholder='Password'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Password')}
          />
        </Form.Group>

        <div className='login-options'>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Save ID' />
          </Form.Group>
          <a href='/find-id-password' className='find-id-password'>
            Find ID / Password
          </a>
        </div>

        <Button variant='primary' type='submit' className='btn-login'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
