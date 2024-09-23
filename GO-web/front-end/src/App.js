import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './Footer.js';
import goImage from './goImage/seller0.jpeg';
import SignupForm from './SignupForm.js';
import SellerPage from './SellersPage.js';
import PrivateRoute from './Authenticator.js'; // Fixed import

/* Header component */
const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false); // Log out user
    navigate('/login');
  };

  return (
    <header className='header'>
      <div className='goText'>GOmarket</div>
      <div className='nav-container'>
        <nav>
          <Link to='/' className='home-nav-link'>Home</Link>
          {isAuthenticated
            ? (
              <button className='logout-button' onClick={handleLogout}>Logout</button>
              )
            : (
              <Link to='/login' className='login-button'>Login</Link>
              )}
        </nav>
      </div>
    </header>
  );
};

/* Main Landing Page */
const GoView = ({ isAuthenticated }) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <div className='mottoText'>
        "Grocery Shopping Let go to market without leaving your doorstep"
      </div>
      <div className='content-container'>
        <div className='img_container'>
          <div className='seller0mage'>
            <img src={goImage} alt='seller0' />
          </div>
          <div className='intro'>
            <h3><b>Welcome to GOmarket – Your Virtual Marketplace!</b>
              <p>
                "Tired of the stress and time it takes to shop for groceries? GOmarket is here to make your life easier. Our platform connects you with local sellers, allowing you to order fresh groceries and essentials with just a few clicks. Negotiate with sellers, place your order, and have your items delivered to your door, saving you time and effort."
              </p>
            </h3>
          </div>
        </div>
      </div>
      <div className='e_b_container'>
        <Link to={isAuthenticated ? '/sellers' : '/login'}>
          <button className='e_button'>Explore</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

/* Login Page */
const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/login', {
        method: 'POST',
        headers: {
		  'Content-type': 'application/json'
        },
	 	body: JSON.stringify({ email, password })
      });

	    const data = await response.json();

		  if (response.ok) {
			  setIsAuthenticated(true);
			  navigate('/sellers'); // redirect to sellers page after login
		  } else {
			  setErrorMessage(data.error || 'Not a GO uaer!!. or typical error please try again');
		  }
	  } catch (error) {
		  setErrorMessage('Please retry.');
	  }
  };

  return (
    <div className='login-modal'>
      <Link to='/' className='b_home-button'>
        <button className='home-btn'> <b>&larr;</b> GO home</button>
      </Link>
      <div className='login-card'>
        <h2 className='login-title'>Login</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='login-input'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='login-input'
            />
          </div>
          <button type='submit' className='login-button'>Log In</button>
        </form>
        <p>
          "Don't have a GO account?" <Link to='/sign-up' className='sign-link'>Sign up on Go</Link>
        </p>
      </div>
    </div>
  );
};

/* Main App Component */
function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<GoView isAuthenticated={isAuthenticated} />} />
        <Route path='/login' element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/sign-up' element={<SignupForm />} />

        {/* Private Route protecting Sellers Page */}
        <Route
          path='/sellers'
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <SellerPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
