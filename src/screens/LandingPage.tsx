import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Button from '../components/Button';
import LandingGroupImg from './../../assets/landingGroupImg.png';

const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  const theme = useColorScheme();

  return (
    <>
      <SafeAreaView className="w-screen h-screen flex-1 bg-themeWhite justify-center items-center align-middle max-w-md self-center">
        <StatusBar
          backgroundColor="blue"
          barStyle={theme === 'dark' ? 'light-content' : 'default'}
        />
        <ScrollView className="w-full">
          <View
            className="flex w-full"
            accessibilityLabel="Landing Page"
            accessibilityHint="Options include create account, report a test anonymously, or log in"
            accessibilityRole="header">
            <View className="w-full justify-center items-center flex-1 flex-col">
              <Image
                className="w-full h-[500] max-w-md mb-12 bg-cover bg-center"
                source={LandingGroupImg}
              />
            </View>

            <View className="mb-3 flex-1 justify-end mx-auto">
              <Button
                onPress={() => navigation.navigate('SignInPage')}
                innerText="Log in"
                bgColor="bg-white"
                textColor="text-themeBlue"
                border={true}
                borderColor="border border-themeBlue border-2"
                width="80"
                accessLabel="Login"
                accessHint="Navigates to the login screen"
              />
            </View>
            <View className="mb-2 mx-auto">
              <Button
                onPress={() => navigation.navigate('ReportPage')}
                innerText="Report Without Account"
                bgColor="bg-themeWhite"
                textColor="text-themeBlue"
                border={true}
                borderColor="border border-themeBlue border-2"
                width="80"
                accessLabel="Submit your At-Home Covid Text"
                accessHint="Navigates to Report an At-Home Covid Test Page"
              />
            </View>

            <View className="mb-2">
              <Button
                onPress={() => navigation.navigate('Onboarding')}
                innerText="Create Account"
                bgColor="bg-themeBlue"
                textColor="text-themeWhite"
                border={true}
                borderColor="border border-themeBlue border-2"
                width="80"
                accessLabel="Create account"
                accessHint="Navigates to the create account screen"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LandingPage;
