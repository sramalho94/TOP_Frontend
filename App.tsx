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
import Onboard2 from './src/screens/Onboarding/Onboard2';
import Onboard3 from './src/screens/Onboarding/Onboard3';
import DropDownField from './src/components/DropDownField';
import TestScreen from './src/screens/TestScreen';
import CheckBox from './src/components/CheckBox';
import {useEffect, useState} from 'react';
function App(): JSX.Element {
  const [isCheckboxSelected, setCheckboxSelection] = useState(false);
  const handleCheckChanges = () => {
    setCheckboxSelection(prevState => !prevState);
    console.log('handleCheckChanges: ', isCheckboxSelected);
  };
  return (
    <SafeAreaView>
      {/* <ReportPage /> */}
      <CheckBox
        handleCheckChanges={handleCheckChanges}
        isSelected={isCheckboxSelected}
      />
    </SafeAreaView>
  );
}

export default App;
