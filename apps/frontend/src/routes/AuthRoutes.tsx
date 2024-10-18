import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
  </Routes>
);

export default AuthRoutes;