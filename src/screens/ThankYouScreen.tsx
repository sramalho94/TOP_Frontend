import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import TopNavBar from '../components/TopNavBar';

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
  const {loggIn} = route.params || {loggIn: true};

  return (
    <SafeAreaView>
        <TopNavBar textSize='xl' textValue='All Done!' fontFamily='' haveProgress={false} />
      <View className="flex-row justify-center mt-16">
        <Text className="text-4xl">Thank You!</Text>
      </View>
      <View className="flex-row justify-center mt-2">
        <Text className="text-lg ">Your test results have been reported.</Text>
      </View>
      <View className="border-2 border-black w-[286] h-[276] my-4 mx-auto"></View>
      <View className="flex-row justify-center ">
        <Text className="text-lg  px-10 text-center">
          {loggIn
            ? 'You and 1,000 others in your zip code reported results this week.'
            : 'Join our community and save time on your next reporting by making an account today!'}
        </Text>
      </View>
      <View className="flex-1 justify-center mx-auto">
        {loggIn ? (
          <Button
            onPress={() => navigation.navigate('LandingPage')}
            innerText="Take Me Home"
            bgColor="bg-white"
            textColor=""
            border={true}
            borderColor="border border-gray"
          />
        ) : (
          <>
            <Button
              onPress={() => navigation.navigate('CreateAccount')}
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
        )}
      </View>
    </SafeAreaView>
  );
};

export default ThankYouScreen;
