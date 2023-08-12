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
    <SafeAreaView className="h-screen w-screen mx-auto my-auto">
      <ScrollView>
        <View className="flex flex-col w-full min-h-screen p-5">
          <View>
            <Text className="text-5xl color-black body-font font-poetsen text-center">
              Thanks for joining our community, {usernameVal}!
            </Text>
            <View>
              <Text className="mx-auto py-2 font-serif text-[14px]">
                Your account has been created.
              </Text>
            </View>
          </View>
          <View className="m-2 flex-1">
            <Image
              className="mx-auto my-0"
              style={{
                width: 280,
                height: 330,
              }}
              source={jumpImg}></Image>
          </View>

          <Button
            onPress={() => navigation.navigate('HomeDash')}
            innerText="Get Started!"
            bgColor="bg-themeBlue"
            textColor="text-themeWhite"
            border={false}
            borderColor=""
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsentFormThankYou;
