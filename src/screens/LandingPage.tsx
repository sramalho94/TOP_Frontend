import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import Button from '../components/Button';

const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <ScrollView>
        <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto"></View>
        <View className="mt-[87] space-y-[12] mb-[12]">
          <Button
            onPress={() => navigation.navigate('SignInPage')}
            innerText="Log in"
            bgColor="bg-white"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-3"
            width="80"
          />
          <Button
            onPress={() => navigation.navigate('Onboarding')}
            innerText="Create Account"
            bgColor="bg-white"
            textColor="text-themeBlue"
            border={true}
            borderColor="border border-3"
            width="80"
          />
          <Button
            onPress={() => navigation.navigate('ReportPage')}
            innerText="Report Without Account"
            bgColor="bg-themeBlue"
            textColor="text-white"
            border={true}
            borderColor="border-themeBlue border-3"
            width="80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
