// src/components/Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import loginImage from '../assets/images/login.webp';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg md:flex-row md:space-x-4 rounded-lg">
        <div className="flex flex-col justify-center flex-1 p-8 space-y-4">
          <div className="text-center">
            <img src="assets/images/1decision-logo.jpg" alt="Logo" className="w-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Welcome Back</h2>
          </div>
          <button className="flex items-center justify-center w-full p-2 space-x-2 text-white bg-red-500 rounded-md">
            <i className="fab fa-google"></i>
            <span>Sign In With Google</span>
          </button>
          <button className="flex items-center justify-center w-full p-2 space-x-2 text-white bg-blue-600 rounded-md">
            <i className="fab fa-facebook"></i>
            <span>Sign In With Facebook</span>
          </button>
          <div className="text-center text-gray-400">OR SIGN IN WITH EMAIL</div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-gray-600">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-600">Enter Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
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
                  <a href="#" className="text-sm text-purple-600 hover:underline">Forgot Password?</a>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center">
            <span className="text-gray-600">Don't have an account yet? </span>
            <a href="#" className="text-purple-600 hover:underline">Sign up here</a>
          </div>
        </div>
        <div className="flex-1 hidden md:flex md:items-center md:justify-center bg-purple-600 rounded-r-lg">
          <img src={loginImage} alt="Login" className="max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default Login;
