import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import TopNavBar from '../components/TopNavBar';

type Props = {};

const ThankYouScreen = (props: Props) => {
  return (
    <SafeAreaView>
        <TopNavBar textSize='xl' textValue='All Done!' fontFamily='' haveProgress={false} />
      <View className="flex-row justify-center mt-16">
        <Text className="text-4xl">Thank You!</Text>
      </View>
      <View className="flex-row justify-center mt-5">
        <Text className="text-lg font-bold ">
          Your test results have been reported.
        </Text>
      </View>
      <View className="border-2 border-black w-[294] h-[292] my-5 mx-auto"></View>
      <View className="flex-row justify-center mt-6 mb-20">
        <Text className="text-lg font-bold px-10 text-center">
          Join our community and save time on your next reporting by making an
          account today!
        </Text>
      </View>
      <TouchableOpacity className="border-4 mx-auto border-black flex justify-center items-center w-[342] h-[52] rounded-lg ">
        <Text className="text-lg font-bold">Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mx-auto mt-4">
        <Text className="text-lg font-bold">Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ThankYouScreen;
