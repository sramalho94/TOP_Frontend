import React from 'react';
import {View, SafeAreaView, ScrollView, Image} from 'react-native';
import Button from '../components/Button';
import LandingImage from './../../assets/landing_1.png';
import WaveImage from './../../assets/topWave.png';

const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  return (
<<<<<<< HEAD
    <>
      <SafeAreaView className="flex-1 bg-themeWhite">
        {/* <StatusBar backgroundColor="black" barStyle="dark-content" /> */}
        <StatusBar
          backgroundColor="green"
          barStyle={theme === 'dark' ? 'light-content' : 'default'}
        />
        <ScrollView>
          <Image
            className="w-full h-[500] mb-12 bg-cover bg-center "
            source={LandingGroupImg}
=======
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Image
          className="w-full h-72 absolute bg-cover bg-center right-0 left-0 "
          source={WaveImage}
        />
        <Image
          className="w-[342] h-[339] mx-auto mt-[110] xl:mt-[1900]"
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
>>>>>>> 5508bf7c899af90f202e3773fe421b93c571e74a
          />
          <Button
<<<<<<< HEAD
=======
            onPress={() => navigation.navigate('ReportPage')}
            innerText="Report Without Account"
            bgColor="bg-white"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-themeBlue border-3"
            width="80"
          />
          <Button
>>>>>>> 5508bf7c899af90f202e3773fe421b93c571e74a
            onPress={() => navigation.navigate('Onboarding')}
            innerText="Create Account"
            bgColor="bg-themeBlue"
            textColor="text-white"
            border={true}
            borderColor="border border-themeBlue border-3"
            width="80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
