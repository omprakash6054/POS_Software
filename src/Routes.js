import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './UserManagement/login';
import Register from './UserManagement/register';
import ForgotPassword from './UserManagement/forgotpassword';
import Dashboard from './AdminDashboard/Dashboard';
import Schools from './AdminDashboard/Schools';
import Teachers from './AdminDashboard/Teachers';
import PersonalDevelopment from './AdminDashboard/PersonalDevelopment';
import Layout from './common/Layout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/schools" element={<Layout><Schools /></Layout>} />
        <Route path="/teachers" element={<Layout><Teachers /></Layout>} />
        <Route path="/personal-development" element={<Layout><PersonalDevelopment /></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
