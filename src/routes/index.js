import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../page/home';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Thêm các Route khác như trên */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
