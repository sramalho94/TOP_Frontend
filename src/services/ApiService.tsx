import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:3001/api'; // Replace with your actual API base URL

export default class ApiService {

  // Still don't understand, but this allows the .then() to be returned inside this class. This also helps with readability. 
  // Another way to do this is by returning the res inside the .then(), but by putting it in the below function, it improves readilbility
  // https://gabrielctroia.medium.com/side-effects-in-js-promise-chains-7db50b6302f3
  // arrowFun is a lambda (aka: fn) and thenArg is the first argument of the lambda (aka: a)
  static sideEffect = (arrowFun:any) => (thenArg:any) => {
    arrowFun(thenArg);    // process side-effects
    return thenArg; // pass the data further
   };

  // NOTE: These are NOT tested yet! Need to fix "Create Account" screen in order to test the first route: "register".

    // Authentication API calls
  static login(credentials: any): Promise<Response> {
    return axios.post(`${BASE_URL}/auth/login`, credentials);
  }

  static register(userData: any): Promise<Response> {
    console.log("a: "+userData);
    return axios.post(`${BASE_URL}/auth/register`, userData)

    // The sideEffect takes arrowFun, which is the arrow function (res:any) => console.log(res). Also known as a lambda.
    // Also, it takes thenArg, which is the response from the axios.post
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
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

