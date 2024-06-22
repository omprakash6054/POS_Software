import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './UserManagement/login';
import Register from './UserManagement/register';
import ForgotPassword from './UserManagement/forgotpassword';
import Dashboard from './Admin/Dashboard';
import Teachers from './Admin/Teachers';
import PersonalDevelopment from './Admin/PersonalDevelopment';
import Layout from './common/Layout';
import { QrCode } from '@mui/icons-material';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/qrcode" element={<Layout><QrCode /></Layout>}/>
        <Route path="/personal-development" element={<Layout><PersonalDevelopment /></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
