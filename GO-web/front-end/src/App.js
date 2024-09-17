import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './Footer.js';
import goImage from './goImage/seller0.jpeg';
import SignupForm from './SignupForm.js';
import SellerPage from './SellersPage.js'

const Header = () => {
  return (
    <header className='header'>
      <div className='goText'>GOmarket</div>
      <div className='nav-container'>
        <nav>
          <Link to='/' className='home-nav-link'>Home</Link>
	  <Link to='/SellersPage' className="sellers-nav-link">Sellers Page</Link>
          <Link to='/login' className='login-button'>Login</Link>
        </nav>
      </div>
    </header>
  );
};

const GoView = () => {
  return (
    <div>
      <Header />
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
        <button className='e_button'>Explore</button>
      </div>
      <Footer />
    </div>
  );
};

const LoginPage = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Remove empty string

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    navigate('/');
  };

  return (
    <div className='login-modal'> {/* Fixed spelling */}
      <div className='login-card'> {/* Fixed spelling */}
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
          <button type='submit' className='login-button'>
            Log In
          </button>
        </form>
        <p>
          "Don't have a GO account?" <a href='/Sign-up' className='sign-link'>Sign up on Go</a>
        </p>
      </div>
      <button onClick={onClose} className='close-button'>x</button>
    </div>
  );
};

function App () {
  return (
    <Router>
      <Routes>
	<Route path='/' element={<GoView />} />
        <Route path='/login' element={<LoginPage />} />
	<Route path='/Sign-up' element={<SignupForm />} />
        <Route path='/sellersPage' element={<SellerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
