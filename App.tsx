import React, { useEffect, useRef, useState } from 'react';
import LandingPage from './src/screens/LandingPage';
import ReportPage from './src/screens/ReportPage';
import AccountReportPage from './src/screens/AccountReportPage';
import ThankYouScreen from './src/screens/ThankYouScreen';
import SignInPage from './src/screens/SignInPage';
import CreateAccount from './src/screens/CreateAccount';
import ConsentPage from './src/screens/ConsentPage';
import Onboarding from './src/screens/Onboarding';
import HomeDash from './src/screens/HomeDash';

// *** FOR TESTING API CALLS ONLY *** //
import TestScreenRegister from './src/screens/Tests/TestScreenRegister'
import TestScreenLogin from './src/screens/Tests/TestScreenLogin'
import TestGetUsers from './src/screens/Tests/TestScreenGetUsers'
import TestScreenCovidTest from './src/screens/Tests/TestScreenCovidTest'
// *********************************** //

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type RootStackParamList = {
  Onboarding: undefined;
  LandingPage: undefined;
  SignInPage: undefined;
  CreateAccount: undefined;
  ReportPage: undefined;
  ConsentPage: undefined;
  ThankYouScreen: { logIn: boolean };
  AccountReportPage: undefined;
  HomeDash: undefined;
  TestScreenRegister: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const isFirstTime = await AsyncStorage.getItem('first_time');
        if (isFirstTime !== null) {
          setFirstTime(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (

    <AuthProvider>
      <AppContent navigationRef={navigationRef} firstTime={firstTime} />
    </AuthProvider>
  );
}

function AppContent({
  navigationRef,
  firstTime,
}: {
  navigationRef: React.RefObject<NavigationContainerRef<RootStackParamList>>;
  firstTime: boolean;
}) {
  const { authState } = useAuth();

  useEffect(() => {
    if (firstTime) {
      navigationRef.current?.navigate('Onboarding');
    } else if (authState?.authenticated) {
      navigationRef.current?.navigate('HomeDash');
    } else {
      navigationRef.current?.navigate('LandingPage');
    }
  }, [authState, firstTime, navigationRef]);

  return (

    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="SignInPage" component={SignInPage} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="ReportPage" component={ReportPage} /> */}
          <Stack.Screen name="ConsentPage" component={ConsentPage} options={{ headerShown: false }} />
          {/* <Stack.Screen
            name="ThankYouScreen"
            component={ThankYouScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
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