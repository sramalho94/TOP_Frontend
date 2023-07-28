import {createContext, useContext, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import React from 'react';
import ApiService from '../services/ApiService';

interface AuthProps {
  authState?: {token: string | null; authenticated: boolean | null};
  onRegister?: (
    email: string,
    username: string,
    password: string,
    DOB: string,
    state: string,
    ZIP: string,
    firstName: string,
    gender: string,
    ethnicity: string,
    race: string,
  ) => Promise<any>;
  onLogin?: (username: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;

}

const TOKEN_KEY = 'my-jwt';

export const API_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3001' : 'http://localhost:3001';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({token: null, authenticated: null});

  useEffect(() => {
    const loadToken = async () => {
      const token = await Keychain.getGenericPassword();

      console.log('stored:', token);

      if (token) {
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${token.password}`;

        setAuthState({token: token.password, authenticated: true});
      }
    };

    loadToken();
  }, []);

  const apiServiceInstance = new ApiService();

  const register = async (
    email: string,
    username: string,
    password: string,
    DOB: string,
    state: string,
    ZIP: string,
    firstName: string,
    gender: string,
    ethnicity: string,
    race: string,
  ) => {
    try {
      const result:any = await ApiService.register({
        email,
        username,
        password,
        DOB,
        state,
        ZIP,
        firstName,
        gender,
        ethnicity,
        race,
      })


      // set the auth state after successful registration
      setAuthState({token: result.data.token, authenticated: true});
      return result;
    } catch (e) {
      console.log(e); // Log the error here
      return {error: true, msg: (e as any).response.data.msg};
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const result: any = await ApiService.login( {
        username,
        password,
      })


      console.log('🚀 ~ file: AuthContext.tsx:54 ~ result:', result);

      setAuthState({token: result.data.token, authenticated: true});

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;

      await Keychain.setGenericPassword(TOKEN_KEY, result.data.token);

      return result;
    } catch (e) {
      return {error: true, msg: (e as any).response.data.msg};
    }
  };

  const logout = async () => {
    await Keychain.resetGenericPassword();
    axios.defaults.headers.common['Authorization'] = '';
    setAuthState({token: null, authenticated: false});
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
