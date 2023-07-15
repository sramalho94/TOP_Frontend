/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LandingPage from './src/screens/LandingPage';
import ReportPage from './src/screens/ReportPage';
import ThankYouScreen from './src/screens/ThankYouScreen'; import SignInPage from './src/screens/SignInPage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Onboard1 from './src/screens/onboarding/Onboard1';
import Onboard2 from './src/screens/onboarding/Onboard2';
import Onboard3 from './src/screens/onboarding/Onboard3';


function App(): JSX.Element {
  return <SafeAreaView>
    <ReportPage />

  </SafeAreaView>;
}

export default App;
