import React from 'react';
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import Button from '../components/Button';
import LandingImage from './../../assets/landing_1.png';
import WaveImage from './../../assets/topWave.png';

const LandingPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View accessibilityLabel='Landing Page' accessibilityHint='Options include create account, report a test anonymously, or log in' accessibilityRole='header'>
        <Image
          className="absolute bg-cover bg-center right-0 left-0 "
          source={WaveImage}
        />
        <Image
          className="w-[342] h-[339] mx-auto mt-[110]"
          source={LandingImage}
        />
        <View className=" space-y-[12]">
          <Button
            onPress={() => navigation.navigate('SignInPage')}
            innerText="Log in"
            bgColor="bg-white"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-themeBlue border-3"
            width="80"
            accessLabel="Login"
            accessHint="Navigates to the login screen"
          />
          <Button
            onPress={() => navigation.navigate('Onboarding')}
            innerText="Create Account"
            bgColor="bg-white"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-themeBlue border-3"
            width="80"
            accessLabel="Create account"
            accessHint="Navigates to the create account screen"
          />
          <Button
            onPress={() => navigation.navigate('ReportPage')}
            innerText="Report Without Account"
            bgColor="bg-themeBlue"
            textColor="text-white"
            border={true}
            borderColor="border border-themeBlue border-3"
            width="80"
            accessLabel="Report without account"
            accessHint="Navigates to report without account"
          />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
