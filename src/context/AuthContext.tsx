import {createContext, useContext, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import React from 'react';
import ApiService from '../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  userId?: {userId: string | null};
  onRegister?: (registrationData: RegistrationData) => Promise<any>;
  onLogin?: (loginData: LoginData) => Promise<any>;
  onLogout?: () => Promise<any>;
  // getUserId: () => Promise<number | null>;
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

  const [userId, setUserId] = useState<{
    userId: string | null;
  }>({userId: null});

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

  const saveUserIdToLocalStorage = async (id: string) => {
    try {
      await AsyncStorage.setItem('USER_ID', id);
    } catch (error) {
      console.log('Error saving user id to local storage: ', error);
    }
  };

  const getUserIdFromLocalStorage = async (): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem('USER_ID');
    } catch (error) {
      console.log('Error retrieving user id from local storage: ', error);
      return null;
    }
  };

  const register = async (registrationData: RegistrationData) => {
    try {
      const result: any = await ApiService.register(registrationData);
      setAuthState({token: result.token, authenticated: true, loading: false});
      console.log(
        'This is authState in authContext: ' + JSON.stringify(authState),
      );
      setUserId({userId: result.data.user.id});
      saveUserIdToLocalStorage(result.data.user.id.toString());
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;
      await Keychain.setGenericPassword(TOKEN_KEY, result.data.token);
      return result;
    } catch (e) {
      console.log('ooo error in authContext register: ' + e);
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
      setUserId({userId: result.data.user.id});
      saveUserIdToLocalStorage(result.data.user.id.toString());
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;
      await Keychain.setGenericPassword(TOKEN_KEY, result.data.token);
      return result;
    } catch (e) {
      return {error: true, msg: (e as any).response.data.msg};
    }
  };

  useEffect(() => {
    const initUserId = async () => {
      const id = await getUserIdFromLocalStorage();
      if (id) setUserId({userId: id});
    };

    initUserId();
  }, []);

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
    userId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
