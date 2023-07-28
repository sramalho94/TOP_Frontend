import axios from 'axios';
import {Platform} from 'react-native';

const BASE_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3001' : 'http://localhost:3001';

export default class ApiService {

  // https://gabrielctroia.medium.com/side-effects-in-js-promise-chains-7db50b6302f3
  // don't want all the burden on the return, so we had a sideEffect handler?
  // Lambda is a lambda (aka: fn), which we call in JavaScript anonymous functions (anon arrow function below) and "a" is the first argument of the lambda
  static sideEffect = (lambda:any) => (a:any) => {
    lambda(a);    // process side-effects
    return a; // pass the data further
   };

// ####################### AUTHENTICATION ####################### //

  // ✅ It works

  // TODO: Need to test
  static login(credentials: any): Promise<Response> {

    return axios.post(`${BASE_URL}/auth/login`, credentials)
    .then(this.sideEffect((res: any)=> console.log("Login " + res)))
    .catch(this.sideEffect((error: any) => console.log("Login " + error)))
  }

  // TODO: Need to test
  static register(userData: any): Promise<Response> {

    return axios.post(`${BASE_URL}/auth/register`, userData)
    // The sideEffect takes "lambda", which is the arrow function (res:any) => console.log(res).
    // Also, it takes "a", which is the response from the axios.post
    .then(this.sideEffect((res: any)=> console.log("Register API service success: " + res)))
    .catch(this.sideEffect((error: any) => console.log("Register API service error: " + error)))
  }

  static checkSession(): Promise<Response> {

    // Add any necessary authentication headers, such as the JWT token
    return axios.get(`${BASE_URL}/auth/check-session`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static updatePassword(updatePassword: any): Promise<Response> {

    return axios.put(`${BASE_URL}/auth/update-password`, updatePassword)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }
// ####################### USER ####################### //


  static getAllUsers(): Promise<Response> {

    return axios.get(`${BASE_URL}/users`)
    .then(this.sideEffect((res: any)=> console.log("Users: " + JSON.stringify(res.data))))
    .catch(this.sideEffect((error: any) => console.log("Users: " + error)))
  }


  static getUserById(id: any): Promise<Response> {

    return axios.get(`${BASE_URL}/users/${id}`)
    .then(this.sideEffect((res: any)=> console.log("User by id: " + JSON.stringify(res.data))))
    .catch(this.sideEffect((error: any) => console.log("User by id error: " + error)))
  }

  static updateUser(id: any, userData: any): Promise<Response> {

    return axios.put(`${BASE_URL}/users/${id}`, userData)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static deleteUser(id: any): Promise<Response> {

    return axios.delete(`${BASE_URL}/users/${id}`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

// ####################### COVID TEST ####################### //

  static getAllTests(): Promise<Response> {

    return axios.get(`${BASE_URL}/test`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static getTestById(id: any): Promise<Response> {

    return axios.get(`${BASE_URL}/test/${id}`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  // TODO: Need to test
  static createTest(testData: any): Promise<Response> {

    return axios.post(`${BASE_URL}/test`, testData)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  // Probably don't need???
  static updateTest(id: any, testData: any): Promise<Response> {

    return axios.put(`${BASE_URL}/test/${id}`, testData)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  // Probably don't need???
  static deleteTest(id: any): Promise<Response> {

    return axios.delete(`${BASE_URL}/test/${id}`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  
}

