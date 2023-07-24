/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LandingPage from './src/screens/LandingPage';
import ReportPage from './src/screens/ReportPage';
import AccountReportPage from './src/screens/AccountReportPage';
import ThankYouScreen from './src/screens/ThankYouScreen';
import SignInPage from './src/screens/SignInPage';
import CreateAccount from './src/screens/CreateAccount';
import ConsentPage from './src/screens/ConsentPage';
import Onboarding from './src/screens/Onboarding';
import HomeDash from './src/screens/HomeDash';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import DropDownField from './src/components/DropDownField';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ConsentPage />
    </SafeAreaView>
  );

}

export default App;
