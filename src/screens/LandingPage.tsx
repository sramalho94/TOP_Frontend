import React from 'react';
import {View, SafeAreaView, ScrollView, Image} from 'react-native';
import Button from '../components/Button';
import LandingImage from './../../assets/landing_1.png';
import WaveImage from './../../assets/topWave.png';

const LandingPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 min-w-screen min-h-screen">
      <ScrollView>

        {/* page view */}
        <View className="w-screen h-screen">
          <Image
            className="absolute bg-cover bg-center right-0 left-0 "
            source={WaveImage}
          />
          <Image
            className="w-[342] h-[339] mx-auto mt-[110]"
            source={LandingImage}
          />
          <View className="w-screen space-y-[12]">
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
              onPress={() => navigation.navigate('ReportPage')}
              innerText="Report Without Account"
              bgColor="bg-white"
              textColor="text-themeBlue"
              border={true}
              borderColor="border border-themeBlue border-3"
              width="80"
            />
            <Button
              onPress={() => navigation.navigate('Onboarding')}
              innerText="Create Account"
              bgColor="bg-themeBlue"
              textColor="text-white"
              border={true}
              borderColor="border border-themeBlue border-3"
              width="80"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
