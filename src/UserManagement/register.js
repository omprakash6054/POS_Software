import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      console.log('Register submitted', values);
    }, 400);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-4xl bg-white shadow-lg md:flex-row md:space-x-4 rounded-lg">
        <div className="flex flex-col justify-center flex-1 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-gray-600">Username</label>
                  <Field
                    name="username"
                    type="text"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-500" />
                </div>
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
                  <label htmlFor="password" className="block text-gray-600">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white rounded-md"
                  style={{ backgroundColor: '#336699' }}
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center">
            <span className="text-gray-600">Already have an account? </span>
            <a href="/" className="text-purple-600 hover:underline">Sign in here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
