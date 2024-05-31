// src/components/ForgotPassword.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { forgotPasswordSchema } from '../utils/validationSchema';
import authService from '../services/authService';

const ForgotPassword = () => {
  const handleForgotPassword = async (values) => {
    try {
      await authService.forgotPassword(values.email);
      alert('Password reset link sent to your email');
    } catch (error) {
      alert('Failed to send password reset link');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleForgotPassword}
      >
        {() => (
          <Form>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
