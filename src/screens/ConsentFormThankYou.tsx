import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useAuth} from '../context/AuthContext';
import jumpImg from './../../assets/jump.png';

type ConsentFormThankYouNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ConsentFormThankYou'
>;
type ConsentFormThankYouRouteProp = RouteProp<
  RootStackParamList,
  'ConsentFormThankYou'
>;
type Props = {
  navigation: ConsentFormThankYouNavigationProp;
  route: ConsentFormThankYouRouteProp;
};

const ConsentFormThankYou = ({navigation}: Props) => {
  const {usernameVal} = useAuth();
  return (
    <SafeAreaView className="flex-1 w-screen h-screen max-w-md bg-themeWhite self-center">
      <View
        className="flex flex-1 w-full h-full items-center"
        accessibilityLabel="Thank You Page"
        accessibilityHint="Thank you for creating an account"
        accessibilityRole="header">
        {/* FIXME: might use below instead of above */}
        {/* <SafeAreaView className="flex-1 bg-themeWhite"> */}
        {/* <View className="flex-1 mx-auto mb-20  justify-center"> */}
        <View className="justify-around w-full h-full">
          <Text
            className=" text-4xl  text-center mt-10 mx-6 pt-10"
            style={{fontFamily: 'CarterOne'}}>
            Thanks for joining our community, {usernameVal}!
          </Text>
          <Text className="color-black mx-auto py-2 font-serif text-[14px]">
            Your account has been created.
          </Text>
          <View>
            <Image className="mx-auto h-[370px] w-[300px]" source={jumpImg} />
          </View>
          <View className="flex-1 justify-end mt-4">
            <Button
              onPress={() => navigation.navigate('HomeDash')}
              innerText="Get Started!"
              bgColor="bg-themeBlue"
              textColor="text-themeWhite"
              border={false}
              borderColor=""
              accessLabel="Get started"
              accessHint="Navigates to the dashboard"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConsentFormThankYou;
