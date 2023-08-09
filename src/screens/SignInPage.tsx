import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
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
  const [form, setForm] = useState<FormState>(initialFormState);
  const [username, setUsername] = useState('');

  const [userSignUp, setUserSignUp] = useState<any>({
    username: '',
    password: '',
  })

  const handleChange = (field: string, value: string) => {
    setUserSignUp({ ...userSignUp, [field]: value });
  }

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const { onLogin } = useAuth();
  const navigation: any = useNavigation();


  const handleSubmit: any = (e: any) => {
    e.preventDefault();
    console.log("userSignIn submit: ", { userSignUp })

    if (onLogin) {
      onLogin(userSignUp)
        .then((res: any) => {
          console.log('res from login!!: ' + JSON.stringify(res))
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
          <View className="mb-6">
            <TextInputField
              label="Username"
              value={userSignUp.username}
              onChange={value => handleChange('username', value)}
              placeholder=''
            />
            <Password onChange={value => handleChange('password', value)} password={userSignUp.password} />
          </View>




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
            accessible={true}
            accessibilityLabel="Login"
            accessibilityHint="Navigates to the login screen"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}