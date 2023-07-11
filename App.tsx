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
import Onboard1 from './src/screens/onboarding/Onboard1';
import Onboard2 from './src/screens/onboarding/Onboard2';
import Onboard3 from './src/screens/onboarding/Onboard3';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Onboard1 />

    </SafeAreaView>
  );
}

export default App;
