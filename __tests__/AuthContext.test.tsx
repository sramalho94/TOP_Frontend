/**
 * @format
 */

import 'react-native';
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import { AuthProvider, useAuth, API_URL } from '../app/context/AuthContext';

jest.mock('axios');
jest.mock('react-native-keychain', () => ({
  getGenericPassword: jest.fn(),
  setGenericPassword: jest.fn(),
  resetGenericPassword: jest.fn(),
}));

test('register function should send a POST request to the correct API endpoint', async () => {
  const mockPost = jest.fn()
  mockPost.mockResolvedValue({ data: { token: 'fake-token' } });
  axios.post = mockPost

  const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
    wrapper: AuthProvider,
  });

  // Define the interface outside the act() function
  interface TestResult {
    onRegister: (
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
  }

  // Call the register function inside act()
  act(() => {
    const typedResult = result.current as TestResult;
    typedResult.onRegister(
      'testuser',
      'testpassword',
      '1990-01-01',
      'CA',
      '12345',
      'John',
      'Male',
      'Caucasian',
      'White'
    );
  });

  // Wait for the hook to update
  await waitForNextUpdate();

  // Assertions
  expect(axios.post).toHaveBeenCalledWith(`${API_URL}/api/auth/register`, {
    username: 'testuser',
    password: 'testpassword',
    DOB: '1990-01-01',
    state: 'CA',
    ZIP: '12345',
    firstName: 'John',
    gender: 'Male',
    ethnicity: 'Caucasian',
    race: 'White',
  });

  expect(result.current.authState?.token).toBe('fake-token');
  expect(result.current.authState?.authenticated).toBe(true);
});









