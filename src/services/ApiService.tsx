import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:3001/api'; // Replace with your actual API base URL

export default class ApiService {

  // Still don't understand, but this allows the .then() to be returned inside this class. This also helps with readability. 
  // Another way to do this is by returning the res inside the .then(), but by putting it in the below function, it improves readilbility
  // https://gabrielctroia.medium.com/side-effects-in-js-promise-chains-7db50b6302f3
  // Lambda is a lambda (aka: fn), which we call in JavaScript anonymous functions (anon arrow function below) and "a" is the first argument of the lambda
  static sideEffect = (lambda:any) => (a:any) => {
    lambda(a);    // process side-effects
    return a; // pass the data further
   };

  // NOTE: These are NOT tested yet! Need to fix "Create Account" screen in order to test the first route: "register".
  // TODO: -Need to pass in authentication header in most functions below as part of the API call??
  // TODO: -Need react native keychains?
  // TODO: -Need to test each route, probably with a testing playground screen, since not all the screens we have will be used by each route 

    // Authentication API calls
  static login(credentials: any): Promise<Response> {
    return axios.post(`${BASE_URL}/auth/login`, credentials);
  }

  static register(userData: any): Promise<Response> {

    return axios.post(`${BASE_URL}/auth/register`, userData)

    // The sideEffect takes "lambda", which is the arrow function (res:any) => console.log(res).
    // Also, it takes "a", which is the response from the axios.post
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static checkSession(): Promise<Response> {
    // Add any necessary authentication headers, such as the JWT token
    return axios.get(`${BASE_URL}/auth/check-session`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static updatePassword(username: string, oldPassword: string, newPassword: string): Promise<Response> {
    return axios.put(`${BASE_URL}/auth/update-password`, {
      username,
      oldPassword,
      newPassword,
    })
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }
    // User-related API calls
  static getAllUsers(): Promise<Response> {
    return axios.get(`${BASE_URL}/users`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static getUserById(id: any): Promise<Response> {
    return axios.get(`${BASE_URL}/users/${id}`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
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

  // Test-related API calls
  static getAllTests(): Promise<Response> {
    return axios.get(`${BASE_URL}/tests`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static getTestById(id: any): Promise<Response> {
    return axios.get(`${BASE_URL}/tests/${id}`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static createTest(testData: any): Promise<Response> {
    return axios.post(`${BASE_URL}/tests`, testData)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static updateTest(id: any, testData: any): Promise<Response> {
    return axios.put(`${BASE_URL}/tests/${id}`, testData)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  static deleteTest(id: any): Promise<Response> {
    return axios.delete(`${BASE_URL}/tests/${id}`)
    .then(this.sideEffect((res: any)=> console.log(res)))
    .catch(this.sideEffect((error: any) => console.log(error)))
  }

  
}

