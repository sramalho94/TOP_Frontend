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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Landing Page"
          component={LandingPage}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Log In"
          component={SignInPage} />
        <Stack.Screen
          name="Create Account"
          component={CreateAccount} />
        <Stack.Screen
          name="Report COVID-19 Test Results"
          component={ReportPage} />
        <Stack.Screen
          name="Consent Form"
          component={ConsentPage} />
        <Stack.Screen
          name="Thank You"
          component={ThankYouScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Report COVID-19 Test Results Anonymously"
          component={AccountReportPage} />
        <Stack.Screen
          name="Home"
          component={HomeDash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
