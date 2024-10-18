import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/shared/Header';

const UserRoutes: React.FC = () => (
    <Routes>
      <Route path="/home" element={<Header />} />
    </Routes>
  );
  
  export default UserRoutes;