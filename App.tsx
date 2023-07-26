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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import DropDownField from './src/components/DropDownField';

export type RootStackParamList = {
  ThankYouScreen: {loggIn: boolean};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen name="SignInPage" component={SignInPage} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="ReportPage" component={ReportPage} />
          <Stack.Screen name="ConsentPage" component={ConsentPage} /> */}
          <Stack.Screen
            name="ThankYouScreen"
            component={ThankYouScreen}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="AccountReportPage"
            component={AccountReportPage}
          />
          <Stack.Screen name="HomeDash" component={HomeDash} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
