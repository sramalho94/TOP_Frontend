import {createContext, useContext, useEffect, useState} from 'react';
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
  userId?: number | null;

  usernameVal?: string | null;

  DOB?: string | null;

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

  const [userId, setUserId] = useState<number | null>(null);

  const [usernameVal, setUsernameVal] = useState<string | null>(null);

  const [DOB, setDOB] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await Keychain.getGenericPassword();
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

  const saveUserIdToLocalStorage = async (id: number) => {
    try {
      await AsyncStorage.setItem('USER_ID', id.toString());
    } catch (error) {
      console.log('Error saving user id to local storage: ', error);
    }
  };

  const getUserIdFromLocalStorage = async (): Promise<number | null> => {
    try {
      const storedId = await AsyncStorage.getItem('USER_ID');
      return storedId ? parseInt(storedId, 10) : null;
    } catch (error) {
      console.log('Error retrieving user id from local storage: ', error);
      return null;
    }
  };
  // USER
  const saveUserNameToLocalStorage = async (username: string) => {
    try {
      await AsyncStorage.setItem('USERNAME', username);
    } catch (error) {
      console.log('Error saving user name to local storage: ', error);
    }
  };

  const getUserNameFromLocalStorage = async (): Promise<string | null> => {
    try {
      const storedUserName = await AsyncStorage.getItem('USERNAME');
      return storedUserName;
    } catch (error) {
      console.log('Error retrieving user name from local storage: ', error);
      return null;
    }
  };

  const saveDOBToLocalStorage = async (DOB: string) => {
    try {
      await Keychain.setGenericPassword('DOB', DOB);
    } catch (error) {
      console.log('Error saving DOB to keychain: ', error);
    }
  };

  const getDOBFromKeychain = async (): Promise<string | null> => {
    try {
      const storedDOB = await Keychain.getGenericPassword();
      if (storedDOB && storedDOB.username === 'DOB') {
        return storedDOB.password;
      }
      return null;
    } catch (error) {
      console.log('Error retrieving DOB from keychain: ', error);
      return null;
    }
  };

  const register = async (registrationData: RegistrationData) => {
    try {
      const result: any = await ApiService.register(registrationData);
      setAuthState({token: result.token, authenticated: true, loading: false});
      setUserId(result.data.user.id);
      saveUserIdToLocalStorage(result.data.user.id.toString());

      setUsernameVal(result.data.user.username);
      saveUserNameToLocalStorage(result.data.user.username);

      setDOB(result.data.user.DOB);
      saveDOBToLocalStorage(result.data.user.DOB);

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;
      await Keychain.setGenericPassword(TOKEN_KEY, result.data.token);
      return result;
    } catch (e) {
      console.log('error in authContext register: ' + e);
      return {error: true, msg: (e as any).response.data.msg};
    }
  };

  const login = async (loginData: LoginData) => {
    try {
      const result: any = await ApiService.login(loginData);
      setAuthState({
        token: result.data.token,
        authenticated: true,
        loading: false,
      });
      setUserId(result.data.user.id);
      saveUserIdToLocalStorage(result.data.user.id.toString());
      setUsernameVal(result.data.user.username);
      saveUserNameToLocalStorage(result.data.user.username);
      setDOB(result.data.user.DOB);
      saveDOBToLocalStorage(result.data.user.DOB);
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
      if (id) {
        setUserId(id);
      }
    };
    const initDOB = async () => {
      const DOBVal = await getDOBFromKeychain();
      if (DOBVal) {
        setDOB(DOBVal);
      }
    };

    const initUserName = async () => {
      const username = await getUserNameFromLocalStorage();
      if (username) {
        setUsernameVal(username);
      }
    };
    initUserId();

    initUserName();

    initDOB();
  }, []);

  const logout = async () => {
    // Clear Keychain data (both token and DOB)
    await Keychain.resetGenericPassword();

    // Clear Async Storage data
    await AsyncStorage.multiRemove(['USER_ID', 'USERNAME']);

    // Clear axios default headers for authorization
    axios.defaults.headers.common['Authorization'] = '';

    // Reset state
    setAuthState({token: null, authenticated: false, loading: false});
    setUserId(null);
    setUsernameVal(null);
    setDOB(null);
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
    userId,

    usernameVal,

    DOB,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
