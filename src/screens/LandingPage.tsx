import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <View className="border-2 border-black w-[342] h-[339] mt-auto " />
      <View className="mt-[87] space-y-[12] mb-[12]">
        <Button text="Log In" onPress={() => {}} />
        <Button text="Create Account" onPress={() => {}} />
        <Button
          text="Report Without Account"
          onPress={() => {}}
          bgColor="#B4B4B4"
        />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
