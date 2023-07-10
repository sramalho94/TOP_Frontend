/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Onboard1 from './src/screens/Onboarding/Onboard1';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Onboard1 />

    </SafeAreaView>
  );
}

export default App;
