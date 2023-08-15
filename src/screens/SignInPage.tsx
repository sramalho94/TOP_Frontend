import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import Password from '../components/Password';
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';
import TopNavBar from '../components/TopNavBar';
import {useAuth} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import SignInImg from '../../assets/SignInImg.png';

type Props = {};

type FormState = {
  username: string;
  password: string;
  showPassword: boolean;
};

const initialFormState: FormState = {
  username: '',
  password: '',
  showPassword: false,
};

export default function SignInPage(props: Props) {
  const [userSignUp, setUserSignUp] = useState<any>({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (field: string, value: string) => {
    setUserSignUp({...userSignUp, [field]: value});
  };

  const {onLogin} = useAuth();
  const navigation: any = useNavigation();

  const handleSubmit: any = (e: any) => {
    e.preventDefault();

    if (onLogin) {
      onLogin(userSignUp)
        .then((res: any) => {
          if (res.success) {
            navigation.navigate('AccountReportPage');
          }
        })
        .catch((error: any) => {
          setErrorMessage(
            'Username or Password is incorrect. Please try again or click Forgot Password.',
          );
          console.log('Screen Login Err: ' + error);
        });
    } else {
      console.log('onLogin is not a function or is undefined.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-themeWhite w-screen h-screen ">
      <ScrollView>
        {/* <ScrollView className="flex-1" contentContainerStyle={{flexGrow: 1}}> */}
        <View className="flex-1">
          <Text
            style={{fontFamily: 'Carter One'}}
            className=" text-3xl color-black text-center pt-8">
            Welcome back!
          </Text>
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-342 h-349" source={SignInImg}></Image>
          </View>
          <View className="flex items-center align-middle justify-center">
            <TextInputField
              label="Username*"
              value={userSignUp.username}
              onChange={value => handleChange('username', value)}
              placeholder=""
            />
            <Password
              onChange={value => handleChange('password', value)}
              password={userSignUp.password}
            />
          </View>

          {errorMessage ? (
            <View className="mt-0 p-2 min-h-[50px] bg-red-100 border border-red-500 mx-auto w-[315]">
              <Text className="text-red-500">{errorMessage}</Text>
            </View>
          ) : null}
        </View>
        <View className="items-center">
          <Button
            onPress={handleSubmit}
            innerText="Login"
            textColor="text-themeWhite"
            bgColor="bg-themeBlue"
            border={true}
            accessLabel="Login"
            accessHint="Navigates to the login screen"
            borderColor="border border-black"
            width="80"
          />
          <Button
            onPress={() => console.log('pressed')}
            innerText="Forgot Password"
            textColor=""
            bgColor=""
            border={true}
            borderColor="border border-black"
            width="80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
