import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

const ThankYouScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView className="h-screen w-screen mx-auto my-auto ">
      <View className="flex-row justify-center mt-12">
        <Text className="text-4xl">Thank You!</Text>
      </View>
      <View className="flex-row justify-center mt-5">
        <Text className="text-lg ">Your test results have been reported.</Text>
      </View>
      <View className="border-2 border-black w-[286] h-[276] my-4 mx-auto"></View>
      <View className="flex-row justify-center">
        <Text className="text-lg  px-10 text-center">
          Join our community and save time on your next reporting by making an
          account today!
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate('CreateAccount')} // Updated this line
        innerText="Create Account"
        bgColor="bg-white"
        textColor=""
        border={true}
        borderColor="border border-gray"
      />
      <Button
        onPress={() => navigation.navigate('LandingPage')}
        innerText="Back"
        bgColor=""
        textColor=""
        border={false}
        borderColor=""
      />
      <Button
        onPress={() => navigation.navigate('LandingPage')}
        innerText="Take Me Home"
        bgColor=""
        textColor=""
        border={false}
        borderColor=""
      />
    </SafeAreaView>
  );
};

export default ThankYouScreen;
