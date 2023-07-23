import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { NavigationProp } from '@react-navigation/native';


type Props = {
  navigation: NavigationProp<any>;
};

const ThankYouScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="h-screen w-screen mx-auto my-auto ">
      <View className="flex-row justify-center mt-16">
        <Text className="text-4xl">Thank You!</Text>
      </View>
      <View className="flex-row justify-center mt-5">
        <Text className="text-lg font-bold ">
          Your test results have been reported.
        </Text>
      </View>
      <View className="border-2 border-black w-[294] h-[292] my-5 mx-auto"></View>
      <View className="flex-row justify-center mt-4 mb-16">
        <Text className="text-lg font-bold px-10 text-center">
          Join our community and save time on your next reporting by making an
          account today!
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate('Create Account')} // Updated this line
        innerText="Create Account"
        bgColor="bg-white"
        textColor=""
        border={true}
        borderColor="border border-gray"
      />
      <Button
        onPress={() => navigation.navigate('Landing Page')}
        innerText="Skip"
        bgColor=""
        textColor=""
        border={false}
        borderColor=""
      />
    </SafeAreaView>
  );
};

export default ThankYouScreen;
