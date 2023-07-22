import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const LandingPage = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto"></View>
      <View className="mt-[87] space-y-[12] mb-[12]">
        <Button
          onPress={() => navigation.navigate('SignInPage')}
          innerText="Log in"
          bgColor="bg-white"
          textColor=""
          border={true}
          borderColor="border"
        />
        <Button
          onPress={() => navigation.navigate('CreateAccount')}
          innerText="Create Account"
          bgColor="bg-white"
          textColor=""
          border={true}
          borderColor="border"
        />
        <Button
          onPress={() => navigation.navigate('ReportPage')}
          innerText="Report Without Account"
          bgColor="bg-[#B4B4B4]"
          textColor=""
          border={true}
          borderColor="border"
        />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
