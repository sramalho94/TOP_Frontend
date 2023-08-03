import {createContext, useContext, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import React from 'react';
import ApiService from '../services/ApiService';

interface RegistrationData {
  email: string;
  username: string;
  password: string;
  DOB: string;
  state: string;
  ZIP: string;
  firstName: string;
  gender: string;
  ethnicity: string;
  race: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface AuthProps {
  authState?: {
    token: string | null;
    authenticated: boolean | null;
    loading: boolean;
  };
  onRegister?: (registrationData: RegistrationData) => Promise<any>;
  onLogin?: (loginData: LoginData) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my-jwt';

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    loading: boolean;
  }>({token: null, authenticated: null, loading: true});

  useEffect(() => {
    const fetchToken = async () => {
      const token = await Keychain.getGenericPassword();
      console.log('stored:', token);
      if (token && token.password) {
        // Check if the token exists and has a value
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${token.password}`;
        setAuthState({
          token: token.password,
          authenticated: true,
          loading: false,
        });
      } else {
        setAuthState({token: null, authenticated: false, loading: false});
      }
    };
    fetchToken();
  }, []);

  const register = async (registrationData: RegistrationData) => {
    try {
      const result: any = await ApiService.register(registrationData);
      setAuthState({token: result.token, authenticated: true, loading: false});
      console.log("This is authState in authContext: " + JSON.stringify(authState))
      return result;
    } catch (e) {
      console.log("ooo error in authContext register: " + e);
      return {error: true, msg: (e as any).response.data.msg};
    }
  };

  const login = async (loginData: LoginData) => {
    try {
      const result: any = await ApiService.login(loginData);
      console.log('🚀 ~ file: AuthContext.tsx:54 ~ result:', result);
      setAuthState({
        token: result.data.token,
        authenticated: true,
        loading: false,
      });
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
    setAuthState({token: null, authenticated: false, loading: false});
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
