import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logoImage from '../assets/images/1decision-logo.jpg';
import '../index.css'; // Ensure your CSS file is imported

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Handle forgot password logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 login-img">
      <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg md:flex-row md:space-x-4 rounded-lg">
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
                  <label htmlFor="email" className="block text-gray-600">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white rounded-md"
                  style={{ backgroundColor: '#336699' }}
                  disabled={isSubmitting}
                >
                  Send Reset Link
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center">
            <span className="text-gray-600">Remember your password? </span>
            <a href="/" className="text-purple-600 hover:underline">Sign in here</a>
          </div>
        </div>
        <div className="flex-1 hidden md:flex md:items-center md:justify-center login-img1  rounded-r-lg">
         
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
