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
  const {authState} = useAuth();

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
      <CreateAccountProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
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

export default App;
