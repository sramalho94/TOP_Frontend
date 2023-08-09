import {View, Text, SafeAreaView, ScrollView, Linking} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type ThankYouScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ThankYouScreen'
>;
type ThankYouScreenRouteProp = RouteProp<RootStackParamList, 'ThankYouScreen'>;

type Props = {
  navigation: ThankYouScreenNavigationProp;
  route: ThankYouScreenRouteProp;
};

const ThankYouScreen = ({navigation, route}: Props) => {
  const {logIn} = route.params || {logIn: true};

  const handleInfoPress = () => {
    const infoUrl =
      'https://www.cdc.gov/coronavirus/2019-ncov/your-health/isolation.html';
    Linking.openURL(infoUrl);
  };

  return (
    <SafeAreaView className="h-screen w-screen mx-auto my-auto flex-1 justify-between align-middle items-center">
      {/* <ScrollView className='flex-1'> */}
      <View className="flex-row justify-center mt-12">
        <Text className="text-4xl">Thank You!</Text>
      </View>
      <View className="flex-row justify-center mt-2 px-8">
        <Text className="text-lg text-center">
          Your test has been reported. We hope you feel better soon.
        </Text>
      </View>
      <View className="border-2 border-black w-[286] h-[276] my-4 mx-auto"></View>
      <View className="flex-row justify-center">
        <Text className="text-lg px-10 text-center">
          {logIn ? (
            'You and 1,000 others in your zip code reported results this week.'
          ) : (
            <Text>
              Keep your community safe! Check the CDC for
              <Text onPress={handleInfoPress}>
                more information about isolation and precautions
              </Text>
              or call 1-800-CDC-INFO.
            </Text>
          )}
        </Text>
      </View>

      <Button
        onPress={() => navigation.navigate('HomeDash')}
        innerText="Take Me Home"
        bgColor="bg-white"
        textColor=""
        border={true}
        borderColor="border border-gray"
        width='full'
      />
      {/* {logIn ? (
            <Button
              onPress={() => navigation.navigate('HomeDash')}
              innerText="Take Me Home"
              bgColor="bg-white"
              textColor=""
              border={true}
              borderColor="border border-gray"
            />
          ) : (
            <>
              <Button
                onPress={() => navigation.navigate('Onboarding')}
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
            </>
          )} */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default ThankYouScreen;
