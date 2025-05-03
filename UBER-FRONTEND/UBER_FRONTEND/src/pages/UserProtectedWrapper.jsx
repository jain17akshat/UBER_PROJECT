import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
  const { user } = useContext(UserDataContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!user || !user.email || !token) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || !user.email) {
    return null; // Avoid rendering protected content
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
