import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import RegistrationPage from '../pages/Auth/RegistrationPage';
import LoginPage from '../pages/Auth/LoginPage';
import HomePage from '../pages/Homepage';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>

      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/login"/>} />

        <Route path="/register" element={!user ? <RegistrationPage/> : <Navigate to="/"/>} />

        <Route path="/login" element={!user ? <LoginPage/> : <Navigate to="/"/>} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
