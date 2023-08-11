import React from 'react';
import {View, SafeAreaView, ScrollView, Image} from 'react-native';
import Button from '../components/Button';
import LandingImage from './../../assets/landing_1.png';
import WaveImage from './../../assets/topWave.png';

const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView className="w-screen h-screen flex-1">
      <ScrollView className="">
        {/* page view */}
        <View className="w-full justify-center items-center flex-1 flex-col">
          <View className="">
            <Image
              className="bg-cover bg-center right-0 left-0 "
              source={WaveImage}
            />
          </View>
          <View className=''>
            <Image className="mx-auto" source={LandingImage} />
          </View>
          <View className="w-full flex-1">
            <Button
              onPress={() => navigation.navigate('SignInPage')}
              innerText="Log in"
              bgColor="bg-white"
              textColor="text-themeBlue"
              border={true}
              borderColor="border border-themeBlue border-3"
              width="full"
            />
            <Button
              onPress={() => navigation.navigate('ReportPage')}
              innerText="Report Without Account"
              bgColor="bg-white"
              textColor="text-themeBlue"
              border={true}
              borderColor="border border-themeBlue border-3"
              width="full"
            />
            <Button
              onPress={() => navigation.navigate('Onboarding')}
              innerText="Create Account"
              bgColor="bg-themeBlue"
              textColor="text-white"
              border={true}
              borderColor="border border-themeBlue border-3"
              width="full"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
