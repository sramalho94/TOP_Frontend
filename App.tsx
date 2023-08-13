import React, {useEffect, useRef, useState} from 'react';
import LandingPage from './src/screens/LandingPage';
import ReportPage from './src/screens/ReportPage';
import AccountReportPage from './src/screens/AccountReportPage';
import ThankYouScreen from './src/screens/ThankYouScreen';
import PositiveThankYouScreen from './src/screens/PositiveThankYouScreen';
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
import CreateAccount1 from './src/screens/CreateAccount/CreateAccount1';
import CreateAccount2 from './src/screens/CreateAccount/CreateAccount2';
import CreateAccount3 from './src/screens/CreateAccount/CreateAccount3';
import CreateAccountProvider from './src/context/CreateAccountProvider';
import ConsentFormThankYou from './src/screens/ConsentFormThankYou';
import Loading from './src/screens/Loading';
import DataDashboard from './src/screens/DataDashboard';

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
  Loading: undefined;
  DataDashboard: undefined;
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
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  // Determine the initial screen based on the token
  useEffect(() => {
    if (authState?.token) {
      setInitialScreen('HomeDash');
    } else {
      setInitialScreen('LandingPage');
    }
    setIsTokenChecked(true);
  }, [authState?.token]);

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

  if (!isTokenChecked) {
    return <Loading />;
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
            <Stack.Screen
              name="SignInPage"
              component={SignInPage}
              options={{headerShown: false}}
            />
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
            <Stack.Screen
              name="ReportPage"
              component={ReportPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ConsentPage"
              component={ConsentPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ThankYouScreen"
              component={ThankYouScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PositiveThankYouScreen"
              component={PositiveThankYouScreen}
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
            <Stack.Screen
              name="HomeDash"
              component={HomeDash}
              options={{headerShown: false, title: 'Home'}}
            />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen
              name="DataDashboard"
              component={DataDashboard}
              options={{title: 'Data Dashboard', headerBackTitle: 'Home'}}
            />
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
