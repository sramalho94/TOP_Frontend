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
import topWave from './../../assets/topWave.png';
const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Image
          className="absolute bg-cover bg-center right-0 left-0 "
          source={topWave}
        />
        <Image
          className="w-[342] h-[339] mx-auto mt-[110]"
          source={LandingGroupImg}
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
          />
          <Button
            onPress={() => navigation.navigate('Onboarding')}
            innerText="Create Account"
            bgColor="bg-white"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-themeBlue border-3"
            width="80"
          />
          <Button
            onPress={() => navigation.navigate('ReportPage')}
            innerText="Report Without Account"
            bgColor="bg-themeBlue"
            textColor="text-themeWhite"
            border={true}
            borderColor="border border-themeBlue border-2"
            width="80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
