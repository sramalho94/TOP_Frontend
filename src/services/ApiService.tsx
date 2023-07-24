import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:3001/api'; // Replace with your actual API base URL

export default class ApiService {

  // NOTE: These are NOT tested yet! Need to fix "Create Account" screen in order to test the first route: "register".

    // Authentication API calls
  static async login(credentials) {
    return axios.post(`${BASE_URL}/auth/login`, credentials);
  }

  static async register(userData) {
    return axios.post(`${BASE_URL}/auth/register`, userData);
  }

  static async checkSession() {
    // Add any necessary authentication headers, such as the JWT token
    return axios.get(`${BASE_URL}/auth/check-session`);
  }

  static async updatePassword(username, oldPassword, newPassword) {
    return axios.put(`${BASE_URL}/auth/update-password`, {
      username,
      oldPassword,
      newPassword,
    });
  }
    // User-related API calls
  static async getAllUsers() {
    return axios.get(`${BASE_URL}/users`);
  }

  static async getUserById(id) {
    return axios.get(`${BASE_URL}/users/${id}`);
  }

  static async updateUser(id, userData) {
    return axios.put(`${BASE_URL}/users/${id}`, userData);
  }

  static async deleteUser(id) {
    return axios.delete(`${BASE_URL}/users/${id}`);
  }

  // Test-related API calls
  static async getAllTests() {
    return axios.get(`${BASE_URL}/tests`);
  }

  static async getTestById(id) {
    return axios.get(`${BASE_URL}/tests/${id}`);
  }

  static async createTest(testData) {
    return axios.post(`${BASE_URL}/tests`, testData);
  }

  static async updateTest(id, testData) {
    return axios.put(`${BASE_URL}/tests/${id}`, testData);
  }

  static async deleteTest(id) {
    return axios.delete(`${BASE_URL}/tests/${id}`);
  }

  
}

