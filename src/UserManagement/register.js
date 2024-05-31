// src/components/Register.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../utils/validationSchema';
import authService from '../services/authService';

const Register = () => {
  const handleRegister = async (values) => {
    try {
      await authService.register(values.username, values.email, values.password);
      alert('Registration successful');
      // Redirect to the login page
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {() => (
          <Form>
            <div>
              <label>Username</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
