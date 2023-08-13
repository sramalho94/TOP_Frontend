import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import CelebrateImage from './../../assets/mega-creator_jump.png'

type ThankYouScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ThankYouScreen'
>;
type ThankYouScreenRouteProp = RouteProp<RootStackParamList, 'ThankYouScreen'>;

type Props = {
  navigation: ThankYouScreenNavigationProp;
  route: ThankYouScreenRouteProp;
};

const ThankYouScreen = ({ navigation, route }: Props) => {
  const { logIn } = route.params || { logIn: true };

  // FIXME: do we need below function? I have a feeling we do...
  const handleInfoPress = () => {
    // const infoUrl =
    //   'https://www.cdc.gov/coronavirus/2019-ncov/your-health/isolation.html';
    // Linking.openURL(infoUrl);
  };

  return (
    <SafeAreaView className="h-screen w-screen mx-auto my-auto">
      {/* <ScrollView> */}
        <View accessibilityLabel='Thank you for Reporting your Covid Test' accessibilityHint='Thanking you for submitting you Covid Test' accessibilityRole='header'>
        <View className="flex-row justify-center mt-12">
          <Text className="text-4xl">Thank You!</Text>
        </View>
        <View className="flex-row justify-center mt-2">
        <Text className="text-lg text-center">
          Your test has been reported. We hope you feel better soon.
        </Text>
      </View>
          <Text className="text-lg ">
            Your test results have been reported.
          </Text>
        </View>
        <Image 
          className="mx-auto"
          source={CelebrateImage}
        />
        {/* <View className="border-2 border-black w-[286] h-[276] my-4 mx-auto"></View> */}

        {/* FIXME: probably dont need below ? */}
        {/* <View className="flex-row justify-center ">
          <Text className="text-lg  px-10 text-center">
            {logIn
              ? 'You and 1,000 others in your zip code reported results this week.'
              : 'Join our community and save time on your next reporting by making an account today!'}
          </Text>
        </View> */}

        <View className="flex-1 justify-center mx-6">
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
        
      </View>

      <Button
        onPress={() => navigation.navigate('HomeDash')}
        innerText="Take Me Home"
        bgColor="bg-white"
        textColor=""
        border={true}
        borderColor="border border-gray"
        width='full'
        accessLabel='Go to Homescreen'
        accessHint='Navigates you the to homescreen'
      />
      {/* {logIn ? (
            <Button
              onPress={() => navigation.navigate('HomeDash')}
              innerText="Take Me Home"
              bgColor="bg-white"
              textColor=""
              border={true}
              borderColor="border border-gray"
              accessible={true}
              accessibilityLabel="Take me home"
              accessibilityHint="Navigates to the home screen"

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
                accessible={true}
                accessibilityLabel="Create account"
                accessibilityHint="Navigates to the create account screen"
              />
              <Button
                onPress={() => navigation.navigate('LandingPage')}
                innerText="Back"
                bgColor=""
                textColor=""
                border={false}
                borderColor=""
                accessible={true}
                accessibilityLabel="Back"
                accessibilityHint="Navigates to the previous screen"
              />
            </>
          )} */}
          
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default ThankYouScreen;
