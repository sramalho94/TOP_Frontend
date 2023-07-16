import {View, Text} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {TouchableOpacity} from 'react-native';
const TestScreen = () => {
  return (
    <View className="min-w-screen min-h-screen justify-center mx-auto">
      <Text>TestScreen</Text>
      <Button
        onPress={() => console.log('fired')}
        innerText="test button"
        bgColor="bg-white"
        border={true}
        borderColor="border-4"
        textColor="text-blue-500"
      />

      <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg bg-[#B4B4B4] mt-6 mb-8 mx-auto">
        <Text className="text-lg font-bold">Report</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestScreen;
