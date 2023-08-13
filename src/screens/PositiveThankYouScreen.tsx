import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import jumpImg from './../../assets/jump.png';

type ThankYouScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PositiveThankYouScreen'
>;
type ThankYouScreenRouteProp = RouteProp<
  RootStackParamList,
  'PositiveThankYouScreen'
>;

type Props = {
  navigation: ThankYouScreenNavigationProp;
  route: ThankYouScreenRouteProp;
};

const ThankYouScreen = ({navigation, route}: Props) => {
  console.log('PositiveThankYouScreen', navigation);
  const {logIn} = route.params || {
    logIn: false
  };
  return (
    <SafeAreaView className="h-screen w-screen bg-yellow-500 mx-auto my-auto flex-1">
      <View className="flex-1 mx-auto  justify-center">
        <Text
          style={{fontFamily: 'CarterOne'}}
          className=" text-5xl  text-center pt-10">
          Thank You!
        </Text>
      </View>
      <View className="flex-row justify-center ">
        <Text className=" mx-5 font-serif text-[18px] font-semibold">
          {/* Your test results have been reported. */}
          Your positive test has been reported. We hope you feel better soon.
        </Text>
      </View>
      <Image className="mx-auto h-[370px] w-[300px]" source={jumpImg} />
      <View className="flex-row justify-center ">
        <Text className="text-lg  px-10 text-center">
          {logIn
            ? 'You and 1,000 others in your zip code reported results this week.'
            : 'Join our community and save time on your next reporting by making an account today!'}
        </Text>
      </View>

      <View className="flex-1 justify-end mt-4">
        {logIn ? (
          <Button
            onPress={() => navigation.navigate('HomeDash')}
            innerText="Take Me Home"
            bgColor="bg-themeBlue"
            textColor="text-themeWhite"
            border={false}
            borderColor="border border-gray"
            width="80"
          />
        ) : (
          <>
            <Button
              onPress={() => navigation.navigate('Onboarding')}
              innerText="Create Account"
              bgColor="bg-themeBlue"
              textColor="text-themeWhite"
              border={false}
              borderColor="border border-gray"
              width="80"
            />
            <Button
              onPress={() => navigation.navigate('LandingPage')}
              innerText="Back"
              bgColor="bg-themeBlue"
              textColor="text-themeWhite"
              border={false}
              borderColor=""
              width="80"
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ThankYouScreen;
