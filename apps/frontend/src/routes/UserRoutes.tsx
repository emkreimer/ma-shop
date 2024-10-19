import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';

const UserRoutes: React.FC = () => (
    <Routes>
      <Route path="/index" element={<ProductPage />} />
    </Routes>
  );
  
  export default UserRoutes;