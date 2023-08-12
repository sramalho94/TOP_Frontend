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
    <SafeAreaView className="flex-1 w-screen h-screen max-w-md  bg-themeWhite self-center">
      <View className="flex flex-1 w-full h-full items-center">
        <View className="justify-around w-full h-full">
          <View>
            <View className='mb-2'>
              <Text className="text-5xl md:text-6xl color-black body-font font-poetsen text-center mt-2 mx-6">
                Thanks for joining our community, {usernameVal}!
              </Text>
            </View>
            <View>
              <Text className="color-black mx-auto font-serif text-[14px] md:text-xl">
                Your account has been created.
              </Text>
            </View>
          </View>
          <View>
            <Image className="mx-auto h-[370px] w-[300px]" source={jumpImg} />
          </View>

          <Button
            onPress={() => navigation.navigate('HomeDash')}
            innerText="Get Started!"
            bgColor="bg-themeBlue"
            textColor="text-themeWhite"
            border={false}
            borderColor=""
            width="full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConsentFormThankYou;
