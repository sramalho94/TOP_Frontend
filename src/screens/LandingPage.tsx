import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import Button from '../components/Button';
import LandingImage from './../../assets/landing_1.png';
import WaveImage from './../../assets/topWave.png';

const LandingPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto"></View>
        <View className="mt-[87] space-y-[12] mb-[12] sm:bg-purple-300">
          {/* <Text className="text-3xl font-mono" style={{
  fontFamily: "Borel", fontWeight: "bold"}}>rwnjwkrnjk</Text>
          <Text className="text-3xl">rwnjwkrnjk</Text> */}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
