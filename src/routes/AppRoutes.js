import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import RegistrationPage from '../pages/Auth/RegistrationPage';
import LoginPage from '../pages/Auth/LoginPage';
import HomePage from '../pages/Homepage';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const AppRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);
  const jwtToken = Cookies.get('jwt');
  const isAuthenticated = user || jwtToken;
  return (
    <Router>

      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login"/>} />

        <Route path="/register" element={!isAuthenticated ? <RegistrationPage/> : <Navigate to="/"/>} />

        <Route path="/login" element={!isAuthenticated ? <LoginPage/> : <Navigate to="/"/>} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
