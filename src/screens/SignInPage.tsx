import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import Password from '../components/Password';
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';
import {useAuth} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import SignInImg from '../../assets/SignInImg.png';

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

export default function SignInPage() {
  const [userSignUp, setUserSignUp] = useState<any>({
    initialFormState,
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
      <ScrollView className="flex-1 space-y-12">
        <View>
          <Text
            style={{fontFamily: 'Carter One'}}
            className=" text-4xl color-black text-center mt-10">
            Welcome back!
          </Text>
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-[342px] h-[320px]" source={SignInImg}></Image>
          </View>
          <View className="flex-1 items-center flex-end">
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
            <View className=" p-2 min-h-[50px] bg-red-100 border border-red-500 mx-auto w-[315]">
              <Text className="text-red-500">{errorMessage}</Text>
            </View>
          ) : null}
        </View>
        <View className="flex-1 items-center flex-end">
          <Button
            onPress={handleSubmit}
            innerText="Login"
            textColor="text-themeWhite"
            bgColor="bg-themeBlue"
            border={false}
            accessLabel="Login"
            accessHint="Navigates to the login screen"
            borderColor="border border-black"
            width="80"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
