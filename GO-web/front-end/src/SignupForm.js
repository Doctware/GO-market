import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/register', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
          role: 'buyer' // Adjust this as needed
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/login'); // Navigate to login after successful signup
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='signup-modal'>
      <Link to='/' className='home-button'>
        <button className='home-btn'> <b>&larr;</b> GO home</button>
      </Link>
      <div className='signup-card'>
        <h2 className='signup-title'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='signup-form'>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
              className='signup-input'
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='signup-input'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='signup-input'
            />
          </div>
          <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className='signup-input'
            />
          </div>
          <button type='submit' className='signup-button'>
            Sign Up
          </button>
        </form>
        <p>
          Already have a GO account? <Link to='/login' className='login-link'>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
