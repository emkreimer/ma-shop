import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/Login/ProductPage';

const UserRoutes: React.FC = () => (
    <Routes>
      <Route path="/home" element={<ProductPage />} />
    </Routes>
  );
  
  export default UserRoutes;