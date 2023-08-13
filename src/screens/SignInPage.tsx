import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import NoImage from '../../assets/blankimage.png';
import Password from '../components/Password';
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';
import TopNavBar from '../components/TopNavBar';
import {useAuth} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

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
      {/* <ScrollView> */}
      {/* <TopNavBar textSize='xl' textValue='Sign In' fontFamily='' haveProgress={false} /> */}
        <View>
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-[342] h-[349] m-4" source={NoImage}></Image>
          </View>
          <View className="mb-6 flex items-center align-middle justify-center">
            <TextInputField
              label="Username*"
              value={userSignUp.username}
              onChange={value => handleChange('username', value)}
              placeholder='Username'
            />
            <Password onChange={value => handleChange('password', value)} password={userSignUp.password} />
            <View className='w-full max-w-sm px-8 mt-2 '><Text className='text-start underline underline-offset-8'>Forgot Password</Text></View>
          </View>

          {errorMessage ? (
            <View className="mt-0 p-2 bg-red-100 border border-red-500 mx-auto w-[315]">
              <Text className="text-red-500">{errorMessage}</Text>
            </View>
          ) : null}

        </View>
        <View className="mt-4 items-center">
          <Button
            onPress={handleSubmit}
            innerText="Login"
            textColor=""
            bgColor=""
            border={true}
            borderColor="border border-black"
            width='full'
          />
          {/* <Button
            onPress={() => console.log('pressed')}
            innerText="Forgot Password"
            textColor=""
            bgColor=""
            border={true}
            borderColor="border border-black"
            width='full'
          /> */}
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
