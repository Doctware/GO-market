import React from 'react';
import { Navigate } from 'react-router-dom';

/* the Authentication function */
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
