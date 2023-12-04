import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth() {
  const location = useLocation();
  // const isAuthenticated = true;
  const { isAuthenticated } = useSelector(state => state.auth);
  console.log('isAuthenticated', isAuthenticated);
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}

export default RequireAuth;
