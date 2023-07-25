import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:3001/api'; // Replace with your actual API base URL

export default class ApiService {

  // NOTE: These are NOT tested yet! Need to fix "Create Account" screen in order to test the first route: "register".

    // Authentication API calls
  static login(credentials: any): Promise<Response> {
    return axios.post(`${BASE_URL}/auth/login`, credentials);
  }

  static register(userData: any): Promise<Response> {
    return axios.post(`${BASE_URL}/auth/register`, userData);
  }

  static checkSession(): Promise<Response> {
    // Add any necessary authentication headers, such as the JWT token
    return axios.get(`${BASE_URL}/auth/check-session`);
  }

  static updatePassword(username: string, oldPassword: string, newPassword: string): Promise<Response> {
    return axios.put(`${BASE_URL}/auth/update-password`, {
      username,
      oldPassword,
      newPassword,
    });
  }
    // User-related API calls
  static getAllUsers(): Promise<Response> {
    return axios.get(`${BASE_URL}/users`);
  }

  static getUserById(id: any): Promise<Response> {
    return axios.get(`${BASE_URL}/users/${id}`);
  }

  static updateUser(id: any, userData: any): Promise<Response> {
    return axios.put(`${BASE_URL}/users/${id}`, userData);
  }

  static deleteUser(id: any): Promise<Response> {
    return axios.delete(`${BASE_URL}/users/${id}`);
  }

  // Test-related API calls
  static getAllTests(): Promise<Response> {
    return axios.get(`${BASE_URL}/tests`);
  }

  static getTestById(id: any): Promise<Response> {
    return axios.get(`${BASE_URL}/tests/${id}`);
  }

  static createTest(testData: any): Promise<Response> {
    return axios.post(`${BASE_URL}/tests`, testData);
  }

  static updateTest(id: any, testData: any): Promise<Response> {
    return axios.put(`${BASE_URL}/tests/${id}`, testData);
  }

  static deleteTest(id: any): Promise<Response> {
    return axios.delete(`${BASE_URL}/tests/${id}`);
  }

  
}

