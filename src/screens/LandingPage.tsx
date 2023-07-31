import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import Button from '../components/Button';

const LandingPage: React.FC<{navigation: any}> = ({navigation})=> {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <ScrollView>
      <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto"></View>
      <View className="mt-[87] space-y-[12] mb-[12]">
        <Button
          onPress={() => console.log('pressed')}
          innerText="Log in"
          bgColor="bg-white"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
          width='80'
        />
        <Button
          onPress={() => navigation.navigate('ConsentPage')}
          innerText="Create Account"
          bgColor="bg-white"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
          width='80'
        />
        <Button
          onPress={() => navigation.navigate('ConsentPage')}
          innerText="Report Without Account"
          bgColor="bg-[#B4B4B4]"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
          width='80'
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
