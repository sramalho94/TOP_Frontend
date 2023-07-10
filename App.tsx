/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LandingPage from './src/screens/LandingPage';
import ReportPage from './src/screens/ReportPage';
import ThankYouScreen from './src/screens/ThankYouScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Onboard1 from './src/screens/Onboard1';

function App(): JSX.Element {
  return <SafeAreaView>
    <ThankYouScreen />
  </SafeAreaView>;
}

export default App;
