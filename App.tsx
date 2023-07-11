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
  // below is for navigation through app. . .
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Home"
  //         component={Home}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="SubmittedScreen"
  //         component={SubmittedScreen}
  //         options={{ headerShown: false }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

}

export default App;
