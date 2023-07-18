import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto"></View>
      <View className="mt-[87] space-y-[12] mb-[12]">
        {/* <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg ">
          <Text className="text-lg font-bold">Log In</Text>
        </TouchableOpacity> */}
        <Button
          onPress={() => console.log('pressed')}
          innerText="Log in"
          bgColor="bg-white"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
        />
        {/* <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg">
          <Text className="text-lg font-bold">Create Account</Text>
        </TouchableOpacity> */}
        <Button
          onPress={() => console.log('pressed')}
          innerText="Create Account"
          bgColor="bg-white"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
        />
        {/* <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg bg-[#B4B4B4]">
          <Text className="text-lg font-bold">Report Without Account</Text>
        </TouchableOpacity> */}
        <Button
          onPress={() => console.log('pressed')}
          innerText="Report Without Account"
          bgColor="bg-[#B4B4B4]"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
        />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
