import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import NoImage from '../../assets/blankimage.png';
import Password from "../components/Password"
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';
import TopNavBar from '../components/TopNavBar';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

type Props = {};

export default function SignInPage(props: Props) {

  const [userSignUp, setUserSignUp] = useState<any>({
    username: '',
    password: '',
  })
  
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (field: string, value: string) => {
    setUserSignUp({...userSignUp, [field]: value});
  }

  const {onLogin} = useAuth();
  const navigation: any = useNavigation();


  const handleSubmit: any = (e: any) => {
    e.preventDefault();
    console.log("userSignIn submit: ", {userSignUp})

    setErrorMessage('Username or Password is incorrect. Please try again or click Forgot Password.');

    // this only checks if empty, move setErrorMessage to the .catch instead
    if(!userSignUp.username || !userSignUp.password) {
      setErrorMessage('Username or Password is incorrect. Please try again or click Forgot Password.');
    }
    if (onLogin) {
      onLogin(userSignUp)
        .then((res: any) => {
          console.log('res from login!!: ' + JSON.stringify(res.data))
          if (res.success) {
            navigation.navigate('AccountReportPage')
          }
        }
        )
        .catch((error: any) => {
          console.log('Screen Login Err: ' + error);
        });
    } else {
      console.log('onLogin is not a function or is undefined.');
    }
  };


  return (
    <SafeAreaView className="w-342 m-4">
      <ScrollView>
      {/* <TopNavBar textSize='xl' textValue='Sign In' fontFamily='' haveProgress={false} /> */}
        <View className="">
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-342 h-349 m-4" source={NoImage}></Image>
          </View>
          <View className="mb-1">
            <TextInputField
              label="Username"
              value={userSignUp.username}
              onChange={value => handleChange('username', value)}
              placeholder=''
            />
            <Password onChange={value => handleChange('password', value)} password={userSignUp.password} />
          </View>

          {errorMessage ? (
            <View className="mt-0 p-2 bg-red-100 border border-red-500 mx-auto w-[315]">
              <Text className="text-red-500">{errorMessage}</Text>
            </View>
          ) : null}

        </View>
        <View className="mt-4">
          <Button
            onPress={handleSubmit}
            innerText="Login"
            textColor=""
            bgColor=""
            border={true}
            borderColor="border border-black"
            width='80'
          />
          <Button
            onPress={() => console.log('pressed')}
            innerText="Forgot Password"
            textColor=""
            bgColor=""
            border={true}
            borderColor="border border-black"
            width='80'
          />
          <Button
            onPress={() => console.log('Skip button pressed')}
            innerText="Skip"
            bgColor=""
            textColor=""
            border={false}
            borderColor=""
            width='80'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}