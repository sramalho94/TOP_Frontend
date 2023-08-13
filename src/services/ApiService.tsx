import axios, {AxiosResponse} from 'axios';
import {Platform} from 'react-native';

const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3001/api'
    : 'http://localhost:3001/api';

// TODO: For deployment, use a logging library with log levels and log sensitive info under debug. That way, release can filter by warning and sensitive debug messages won't be shown.

export default class ApiService {
  // https://gabrielctroia.medium.com/side-effects-in-js-promise-chains-7db50b6302f3
  // it make the code a little more readable. Otherwise, you'd have to console.log for debugging and return res every time.
  // Lambda is a lambda (aka: fn), which we call in JavaScript anonymous functions (anon arrow function below) and "a" is the first argument of the lambda
  // T is a generic. Since there is no specific type for the below "lambda" or "a", we use the generic type "T".

  static sideEffect<T>(lambda: (a: T) => void) {
    return (a: T): T => {
      lambda(a); // process side-effects
      return a; // pass the data further
    };
  }

  // ####################### AUTHENTICATION ####################### //

  static login(credentials: {
    username: string;
    password: string;
  }): Promise<AxiosResponse> {
    return axios
      .post(`${BASE_URL}/auth/login`, credentials)
      .then(
        this.sideEffect((res: AxiosResponse) =>
          console.log('Login successful in apiService: ' + res.data),
        ),
      )
      .catch(
        this.sideEffect((error: AxiosResponse) =>
          console.log('Login ' + error),
        ),
      );
  }

  static register(userData: {
    email: string;
    username: string;
    password: string;
    DOB: string;
    ZIP: string;
    firstName: string;
    gender: string;
    ethnicity: string;
    race: string;
  }): Promise<AxiosResponse> {
    return axios
      .post(`${BASE_URL}/auth/register`, userData)
      .then(
        this.sideEffect((res: AxiosResponse) =>
          console.log(
            'Register API service success: ' + JSON.stringify(res.data),
          ),
        ),
      )
      .catch(
        this.sideEffect((error: AxiosResponse) =>
          console.log('Register API service error: ' + error),
        ),
      );
  }

  static checkSession(): Promise<AxiosResponse> {
    // Add any necessary authentication headers, such as the JWT token
    return axios
      .get(`${BASE_URL}/auth/check-session`)
      .then(this.sideEffect((res: AxiosResponse) => console.log(res)))
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  static updatePassword(updatePassword: {
    username: string;
    oldPassword: string;
    newPassword: string;
  }): Promise<AxiosResponse> {
    return axios
      .put(`${BASE_URL}/auth/update-password`, updatePassword)
      .then(this.sideEffect((res: AxiosResponse) => console.log(res)))
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }
  // ####################### USER ####################### //

  static getAllUsers(): Promise<AxiosResponse> {
    return axios
      .get(`${BASE_URL}/users`)
      .then(
        this.sideEffect((res: AxiosResponse) =>
          console.log('Users: ' + JSON.stringify(res.data)),
        ),
      )
      .catch(
        this.sideEffect((error: AxiosResponse) =>
          console.log('Users: ' + error),
        ),
      );
  }

  static getUserById(id: number): Promise<AxiosResponse> {
    return axios
      .get(`${BASE_URL}/users/${id}`)
      .then(
        this.sideEffect((res: AxiosResponse) =>
          console.log('User by id: ' + JSON.stringify(res.data)),
        ),
      )
      .catch(
        this.sideEffect((error: AxiosResponse) =>
          console.log('User by id error: ' + error),
        ),
      );
  }

  static updateUser(id: number, userData: Object): Promise<AxiosResponse> {
    return axios
      .put(`${BASE_URL}/users/${id}`, userData)
      .then(this.sideEffect((res: AxiosResponse) => console.log(res)))
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  static deleteUser(id: number): Promise<AxiosResponse> {
    return axios
      .delete(`${BASE_URL}/users/${id}`)
      .then(this.sideEffect((res: AxiosResponse) => console.log(res)))
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  // ####################### COVID TEST ####################### //

  static getAllTests(): Promise<AxiosResponse> {
    return axios
      .get(`${BASE_URL}/test`)
      .then(
        this.sideEffect((res: AxiosResponse) =>
          console.log(
            'This is getting all tests submitted: ' +
              JSON.stringify(res.data.tests),
          ),
        ),
      )
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  static getTestById(id: number): Promise<AxiosResponse> {
    return axios
      .get(`${BASE_URL}/test/${id}`)
      .then(this.sideEffect((res: AxiosResponse) => console.log(res)))
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  // This only creates a test in our db for an anonymous user
  static createTest(testData: {
    result: boolean | null;
    ZIP: string;
    gender: string;
    race: string;
    ethnicity: string;
  }): Promise<AxiosResponse> {
    console.log('This is testData in Create Test: ' + JSON.stringify(testData));
    return axios
      .post(`${BASE_URL}/test/anon`, testData)
      .then(
        this.sideEffect((res: AxiosResponse) =>
          console.log('Created Test: ' + JSON.stringify(res.data)),
        ),
      )
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  // Create test in our db for a registered user
  static createTestWithAccount(testData: {
    result: boolean;
    userId: number;
    ZIP: string;
    gender: string;
    race: string;
    ethnicity: string;
  }): Promise<AxiosResponse> {
    console.log('This is testData in Create Test: ' + JSON.stringify(testData));
    return axios
      .post(`${BASE_URL}/test/`, testData)
      .then(
        this.sideEffect((res: AxiosResponse) =>
          console.log('Created Test: ' + JSON.stringify(res.data)),
        ),
      )
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  // Probably don't need???
  // FIXME: not sure what type "testData" will be, so left it as "any" type
  static updateTest(id: number, testData: any): Promise<AxiosResponse> {
    return axios
      .put(`${BASE_URL}/test/${id}`, testData)
      .then(this.sideEffect((res: AxiosResponse) => console.log(res)))
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }

  // Probably don't need???
  static deleteTest(id: number): Promise<AxiosResponse> {
    return axios
      .delete(`${BASE_URL}/test/${id}`)
      .then(this.sideEffect((res: AxiosResponse) => console.log(res)))
      .catch(this.sideEffect((error: AxiosResponse) => console.log(error)));
  }
}
