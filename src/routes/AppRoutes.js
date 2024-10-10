import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegistrationPage from '../pages/Auth/RegistrationPage';
import LoginPage from '../pages/Auth/LoginPage';
import HomePage from '../pages/Homepage';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
