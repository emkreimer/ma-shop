import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import SignUpPage from '../pages/SignUpPage';

const UserRoutes: React.FC = () => (
    <Routes>
      <Route path="/register" element={<SignUpPage />}></Route>
      <Route path="/index" element={<ProductPage />} />
    </Routes>
  );
  
  export default UserRoutes;