import React from 'react';
import {View, SafeAreaView, ScrollView, Image} from 'react-native';
import Button from '../components/Button';
import LandingGroupImg from './../../assets/landingGroupImg.png';

const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-themeWhite">
      <ScrollView>
        <Image
          className="w-[390] h-[500] mb-12 bg-cover bg-center "
          source={LandingGroupImg}
        />

        <View className="mb-3">
          <Button
            onPress={() => navigation.navigate('SignInPage')}
            innerText="Log in"
            bgColor="bg-white"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-themeBlue border-2"
            width="80"
          />
        </View>
        <View className="mb-2">
          <Button
            onPress={() => navigation.navigate('ReportPage')}
            innerText="Report Without Account"
            bgColor="bg-themeWhite"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-themeBlue border-2"
            width="80"
          />
        </View>
        <Button
          onPress={() => navigation.navigate('Onboarding')}
          innerText="Create Account"
          bgColor="bg-themeBlue"
          textColor="text-themeWhite"
          border={true}
          borderColor="border border-themeBlue border-2"
          width="80"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
