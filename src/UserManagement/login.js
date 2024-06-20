import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../assets/images/1decision-logo.jpg';
import '../index.css'; // Ensure your CSS file is imported

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    setTimeout(() => {
      setSubmitting(false);
      if (values.email === 'sop6054@gmail.com' && values.password === 'Om@123') {
        // Successful login, redirect to dashboard
        navigate('/dashboard');
      } else {
        // Invalid credentials
        setFieldError('email', 'Invalid email or password');
      }
    }, 400);
  };

  return (
    <div className="login-img flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-100 flex flex-col w-full max-w-4xl bg-white shadow-lg md:flex-row md:space-x-4 rounded-lg z-30">
        <div className="flex flex-col justify-center flex-1 p-8 space-y-4">
          <div className="text-center">
            <img src={logoImage} alt="Logo" className="w-25 mx-auto mb-4" />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-600">Username</label>
                  <Field
                    name="email"
                    type="text"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-600">Password</label>
                  <div className="relative">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      className="mr-2"
                    />
                    <span className="text-gray-600">Remember Me</span>
                  </label>
                  <a href="/forgot-password" className="text-sm text-purple-600 hover:underline">Forgot Password?</a>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white rounded-md"
                  style={{ backgroundColor: '#336699' }}
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center">
            <span className="text-gray-600">Don't have an account yet? </span>
            <a href="/register" className="text-purple-600 hover:underline">Sign up here</a>
          </div>
        </div>
        <div className="flex-1 hidden md:flex md:items-center md:justify-center side-login-img rounded-r-lg">
          
        </div>
      </div>
    </div>
  );
};

export default Login;
