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
    setUserSignUp({ ...userSignUp, [field]: value });
  }

  const { onLogin } = useAuth();
  const navigation: any = useNavigation();

  const handleSubmit: any = (e: any) => {
    e.preventDefault();

    if (onLogin) {
      onLogin(userSignUp)
      .then((res: any) => {
        if (res.success) {
          navigation.navigate('AccountReportPage')
        }
      }
      )
      .catch((error: any) => {
          setErrorMessage('Username or Password is incorrect. Please try again or click Forgot Password.');
          console.log('Screen Login Err: ' + error);
        });
    } else {
      console.log('onLogin is not a function or is undefined.');
    }
  };

  return (
    <SafeAreaView className="w-screen h-screen flex-1">
      <ScrollView>
        {/* <TopNavBar textSize='xl' textValue='Sign In' fontFamily='' haveProgress={false} /> */}
        <View className="" accessibilityLabel='Sign in to Account' accessibilityHint='Sign into an account' accessibilityRole='header'>
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-[342] h-[349] m-4" source={NoImage}></Image>
          </View>
          <View className="mb-1 mx-auto w-[342]">
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
            accessLabel="Login"
            accessHint="Navigates to the login screen"
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}