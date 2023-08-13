import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import jumpImg from './../../assets/jump.png';
import positiveImg from './../../assets/positiveImg.png';

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
  const {logIn} = route.params || {
    logIn: true,
  };

  console.log('ThankYouScreen', route, logIn);

  // FIXME: do we need below function? I have a feeling we do...
  const handleInfoPress = () => {
    const termsUrl =
      'https://www.cdc.gov/coronavirus/2019-ncov/your-health/isolation.html';
    Linking.openURL(termsUrl);
  };

  const handleCallPress = () => {
    Linking.openURL('tel:1-800-CDC-INFO');
  };

  return (
    <SafeAreaView className="h-screen w-screen mx-auto my-auto flex-1 bg-themeWhite">
    <View accessibilityLabel='Thank you for Reporting your Covid Test' accessibilityHint='Thanking you for submitting you Covid Test' accessibilityRole='header'>
      <View className="flex-1 mx-auto  justify-center">
        <Text
          style={{fontFamily: 'CarterOne'}}
          className=" text-5xl  text-center pt-10">
          Thank You!
        </Text>
      </View>
      <View className="flex-row justify-center  ">
        <Text className="  font-serif text-[18px] font-medium text-center px-5 mb-10">
            Your test results have been reported.
        </Text>
      </View>

      <Image
        style={{
          alignSelf: 'center',
          height: 370,
          width: 300,
        }}
        source={jumpImg}
      />

      <View className="flex-row text-justify ">
        {/* <Text className="text-lg  px-10 text-center">
          {logIn
            ? 'You and 1,000 others in your zip code reported results this week.'
            : 'Join our community and save time on your next reporting by making an account today!'}
        </Text> */}
        <Text className="text-lg  px-8 text-justify">
          You and 1,000 others in your zip code reported results this week.
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
            accessLabel="Account Home Screen"
            accessHint="Navigates to the account home screen"
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
              accessLabel="Create account"
              accessHint="Navigates to the create account screen"
            />
            <Button
              onPress={() => navigation.navigate('LandingPage')}
              innerText="Back"
              bgColor="bg-themeBlue"
              textColor="text-themeWhite"
              border={false}
              borderColor=""
              width="80"
              accessLabel="Back"
              accessHint="Navigates to the previous screen"
            />
          </>
        )}
      </View>
      </View>
    </SafeAreaView>
  );
};

export default ThankYouScreen;
