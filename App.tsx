import React, {useEffect, useRef, useState} from 'react';
import LandingPage from './src/screens/LandingPage';
import ReportPage from './src/screens/ReportPage';
import AccountReportPage from './src/screens/AccountReportPage';
import ThankYouScreen from './src/screens/ThankYouScreen';
import SignInPage from './src/screens/SignInPage';
import ConsentPage from './src/screens/ConsentPage';
import Onboarding from './src/screens/Onboarding';
import HomeDash from './src/screens/HomeDash';
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
    return <ConsentFormThankYou />;
  }

  return (
    <SafeAreaProvider>
      <CreateAccountProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={
              authState?.authenticated ? 'HomeDash' : 'LandingPage'
            }>
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

function App(): JSX.Element {
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <AuthProvider>
      <AppContent navigationRef={navigationRef} />
    </AuthProvider>
  );
}

export default App;
