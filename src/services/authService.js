// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://quiz-2.testdr.co.uk/';

const Register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password
  });
};

const Login = (username, password) => {
  return axios.post(API_URL + 'login', {
    username,
    password
  });
};

const ForgotPassword = (email) => {
  return axios.post(API_URL + 'forgot-password', {
    email
  });
};

export default {
  Register,
  Login,
  ForgotPassword
};
