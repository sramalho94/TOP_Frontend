import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <View className="border-2 border-black w-[342] h-[339] mt-auto " />
      <View className="mt-[87] space-y-[12] mb-[12]">
        <Button text="Log In" bgColor="bg-white" onPress={() => { }} />
        <Button text="Create Account" bgColor="bg-white" onPress={() => { }} />
        <Button
          text="Report Without Account"
          onPress={() => { }}
          bgColor="bg-blue-500"
        />
      </View>
    </SafeAreaView>
  );
};


const LandingPage = (props: Props) => {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <View className="border-2 border-black w-[342] h-[339] mt-[100] "></View>
      <View className="mt-[87] space-y-[12] mb-[12]">
        <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg ">
          <Text className="text-lg font-bold">Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg">
          <Text className="text-lg font-bold">Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg bg-[#B4B4B4]">
          <Text className="text-lg font-bold">Report Without Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LandingPage

