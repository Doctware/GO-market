import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    // After successful signup, navigate to login page
    navigate('/login');
  };

  return (
    <div className='signup-modal'>
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
          Already have GO account? <Link to='/login' className='login-link'>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
