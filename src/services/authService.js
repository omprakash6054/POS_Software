// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://quiz-2.testdr.co.uk/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'login', {
    username,
    password
  });
};

const forgotPassword = (email) => {
  return axios.post(API_URL + 'forgot-password', {
    email
  });
};

export default {
  register,
  login,
  forgotPassword
};
