// src/components/Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../utils/validationSchema';
import authService from '../services/authService';

const Login = () => {
  const handleLogin = async (values) => {
    try {
      await authService.login(values.username, values.password);
      alert('Login successful');
      // Redirect to the dashboard
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <div>
              <label>Username</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
