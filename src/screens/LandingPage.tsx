import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import Button from '../components/Button';

const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView className="mx-auto my-auto">
      <ScrollView>
        <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto"></View>
        <View className="mt-[87] space-y-[12] mb-[12] sm:bg-purple-300">
          {/* <Text className="text-3xl font-mono" style={{
  fontFamily: "Borel", fontWeight: "bold"}}>rwnjwkrnjk</Text>
          <Text className="text-3xl">rwnjwkrnjk</Text> */}
          <Button
            onPress={() => navigation.navigate('SignInPage')}
            innerText="Log in"
            bgColor="bg-white"
            textColor="text-black"
            border={true}
            borderColor="border border-4"
            width="80"
          />
          <Button
            onPress={() => navigation.navigate('Onboarding')}
            innerText="Create Account"
            bgColor="bg-white"
            textColor="text-black"
            border={true}
            borderColor="border border-4"
            width="80"
          />
          <Button
            onPress={() => navigation.navigate('ReportPage')}
            innerText="Report Without Account"
            bgColor="bg-[#B4B4B4]"
            textColor="text-black"
            border={true}
            borderColor="border border-4"
            width="80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
