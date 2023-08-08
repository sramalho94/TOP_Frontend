import React, {useEffect, useRef, useState} from 'react';
import LandingPage from './src/screens/LandingPage';
import ReportPage from './src/screens/ReportPage';
import AccountReportPage from './src/screens/AccountReportPage';
import ThankYouScreen from './src/screens/ThankYouScreen';
import SignInPage from './src/screens/SignInPage';
import ConsentPage from './src/screens/ConsentPage';
import Onboarding from './src/screens/Onboarding';
import HomeDash from './src/screens/HomeDash';
<<<<<<< HEAD
import { SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

import DropDownField from './src/components/DropDownField';
=======
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider, useAuth} from './src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateAccount1 from './src/screens/CreateAccount/CreateAccount1';
import CreateAccount2 from './src/screens/CreateAccount/CreateAccount2';
import CreateAccount3 from './src/screens/CreateAccount/CreateAccount3';
import CreateAccountProvider from './src/context/CreateAccountProvider';
import ConsentFormThankYou from './src/screens/ConsentFormThankYou';
>>>>>>> e3f6f0bd529aa1159c91450129caa28ad1cfac3d

export type RootStackParamList = {
  Onboarding: undefined;
  LandingPage: undefined;
  SignInPage: undefined;
  CreateAccount: undefined;
  ReportPage: undefined;
  ConsentPage: undefined;
  ThankYouScreen: {logIn: boolean};
  AccountReportPage: undefined;
  HomeDash: undefined;
  CreateAccount1: undefined;
  CreateAccount2: undefined;
  CreateAccount3: undefined;
  ConsentFormThankYou: {logIn: boolean};
};
<<<<<<< HEAD
// const Stack = createNativeStackNavigator<RootStackParamList>();
=======

const Stack = createNativeStackNavigator<RootStackParamList>();
function AppContent({
  navigationRef,
}: {
  navigationRef: React.RefObject<NavigationContainerRef<RootStackParamList>>;
}) {
  const {authState} = useAuth();
  const [initialScreen, setInitialScreen] = useState<
    'HomeDash' | 'LandingPage'
  >('LandingPage');

  // Determine the initial screen based on the token
  useEffect(() => {
    const determineInitialScreen = async () => {
      const token = await AsyncStorage.getItem('@auth_token');
      if (token) {
        setInitialScreen('HomeDash');
      } else {
        setInitialScreen('LandingPage');
      }
    };

    determineInitialScreen();
  }, []);

  // Handle automatic navigation upon authentication changes
  useEffect(() => {
    if (
      !authState?.loading &&
      navigationRef.current?.getCurrentRoute()?.name !== 'ThankYouScreen' &&
      navigationRef.current?.getCurrentRoute()?.name !== 'ConsentFormThankYou'
    ) {
      if (authState?.authenticated) {
        navigationRef.current?.navigate('HomeDash');
      } else if (!authState?.authenticated) {
        navigationRef.current?.navigate('LandingPage');
      }
    }
  }, [authState, navigationRef]);

  if (authState?.loading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <CreateAccountProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName={initialScreen}>
            <Stack.Screen
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
            <Stack.Screen
              name="CreateAccount1"
              component={CreateAccount1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateAccount2"
              component={CreateAccount2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateAccount3"
              component={CreateAccount3}
              options={{headerShown: false}}
            />
            <Stack.Screen name="ReportPage" component={ReportPage} />
            <Stack.Screen name="ConsentPage" component={ConsentPage} />
            <Stack.Screen
              name="ThankYouScreen"
              component={ThankYouScreen}
              options={{headerShown: false}}

            />
            <Stack.Screen
              name="ConsentFormThankYou"
              component={ConsentFormThankYou}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AccountReportPage"
              component={AccountReportPage}
            />
            <Stack.Screen name="HomeDash" component={HomeDash} />
          </Stack.Navigator>
        </NavigationContainer>
      </CreateAccountProvider>
    </SafeAreaProvider>
  );
}
>>>>>>> e3f6f0bd529aa1159c91450129caa28ad1cfac3d

function App(): JSX.Element {
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
<<<<<<< HEAD
 <SafeAreaView >
  <CreateAccount />
 </SafeAreaView>

    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="Onboarding"
    //         component={Onboarding}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="LandingPage"
    //         component={LandingPage}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen name="SignInPage" component={SignInPage} />
    //       <Stack.Screen name="CreateAccount" component={CreateAccount} />
    //       <Stack.Screen name="ReportPage" component={ReportPage} />
    //       <Stack.Screen name="ConsentPage" component={ConsentPage} />
    //       <Stack.Screen
    //         name="ThankYouScreen"
    //         component={ThankYouScreen}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="AccountReportPage"
    //         component={AccountReportPage}
    //       />
    //       <Stack.Screen name="HomeDash" component={HomeDash} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>

=======
    <AuthProvider>
      <AppContent navigationRef={navigationRef} />
    </AuthProvider>
>>>>>>> e3f6f0bd529aa1159c91450129caa28ad1cfac3d
  );
}

export default App;
