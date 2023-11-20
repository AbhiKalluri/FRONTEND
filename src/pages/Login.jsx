import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Perform your authentication logic here
    // For example, you might use an API call to verify the credentials

    try {
      // Simulating a successful login for demonstration purposes
      // Replace this with your actual authentication logic
      // const response = await authenticateUser(credentials);

      // Check if authentication is successful
      // if (response.success) {
      //   navigate('/home'); // Redirect to the home page
      // }

      // Simulating a successful login
      navigate('/home'); // Redirect to the home page
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure, show error message, etc.
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
                  </FormGroup>

                  <Button className='btn secondary_btn auth_btn' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;