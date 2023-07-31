import axios, { AxiosResponse } from 'axios';
import {Platform} from 'react-native';

const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3001/api'
    : 'http://localhost:3001/api';

// TODO: For deployment, use a logging library with log levels and log sensitive info under debug. That way, release can filter by warning and sensitive debug messages won't be shown.

export default class ApiService {
  // https://gabrielctroia.medium.com/side-effects-in-js-promise-chains-7db50b6302f3
  // don't want all the burden on the return, so we had a sideEffect handler?
  // Lambda is a lambda (aka: fn), which we call in JavaScript anonymous functions (anon arrow function below) and "a" is the first argument of the lambda
  // T is a generic. Since there is no specific type for the below "lambda" or "a", we use the generic type "T".
  static sideEffect<T> (lambda: (a:T) => void) {
    return (a:T): T => {
      lambda(a); // process side-effects
      return a; // pass the data further
    }
  };

  // ####################### AUTHENTICATION ####################### //

  static login(credentials: {username: string, password: string}): Promise<Response> {
    console.log("this is credentials in login: " + {credentials})
    return axios
      .post(`${BASE_URL}/auth/login`, credentials)
      .then(this.sideEffect<any>((res: any) => console.log('Login successful in apiService: ' + res.data)))
      .catch(this.sideEffect<Response>((error: Response) => console.log('Login ' + error)));
  }

  static register(userData: {email: string,username: string, password: string, DOB: string, state: string,ZIP: string, firstName: string, gender: string, ethnicity: string, race: string}): Promise<Response> {
    
    return (
      axios
        .post(`${BASE_URL}/auth/register`, userData)
        .then(
          this.sideEffect<any>((res: any) =>
            console.log('Register API service success: ' + JSON.stringify(res.data)),
          ),
        )
        .catch(
          this.sideEffect<any>((error: any) =>
            console.log('Register API service error: ' + error),
          ),
        )
    );
  }

  static checkSession(): Promise<Response> {
    // Add any necessary authentication headers, such as the JWT token
    return axios
      .get(`${BASE_URL}/auth/check-session`)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }

  static updatePassword(updatePassword: any): Promise<Response> {
    return axios
      .put(`${BASE_URL}/auth/update-password`, updatePassword)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }
  // ####################### USER ####################### //

  static getAllUsers(): Promise<Response> {
    return axios
      .get(`${BASE_URL}/users`)
      .then(
        this.sideEffect<any>((res: any) =>
          console.log('Users: ' + JSON.stringify(res.data)),
        ),
      )
      .catch(this.sideEffect<any>((error: any) => console.log('Users: ' + error)));
  }

  static getUserById(id: any): Promise<Response> {
    return axios
      .get(`${BASE_URL}/users/${id}`)
      .then(
        this.sideEffect<any>((res: any) =>
          console.log('User by id: ' + JSON.stringify(res.data)),
        ),
      )
      .catch(
        this.sideEffect<any>((error: any) =>
          console.log('User by id error: ' + error),
        ),
      );
  }

  static updateUser(id: number, userData: Object): Promise<Response> {
    return axios
      .put(`${BASE_URL}/users/${id}`, userData)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }

  static deleteUser(id: number): Promise<Response> {
    return axios
      .delete(`${BASE_URL}/users/${id}`)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }

  // ####################### COVID TEST ####################### //

  static getAllTests(): Promise<Response> {
    return axios
      .get(`${BASE_URL}/test`)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }

  static getTestById(id: number): Promise<Response> {
    return axios
      .get(`${BASE_URL}/test/${id}`)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }

  static createTest(testData: any): Promise<Response> {
    console.log("This is testData in Create Test: " + {testData})
    return axios
      .post(`${BASE_URL}/test`, testData)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }

  // Probably don't need???
  static updateTest(id: number, testData: any): Promise<Response> {
    return axios
      .put(`${BASE_URL}/test/${id}`, testData)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }

  // Probably don't need???
  static deleteTest(id: number): Promise<Response> {
    return axios
      .delete(`${BASE_URL}/test/${id}`)
      .then(this.sideEffect<any>((res: any) => console.log(res)))
      .catch(this.sideEffect<any>((error: any) => console.log(error)));
  }
}
