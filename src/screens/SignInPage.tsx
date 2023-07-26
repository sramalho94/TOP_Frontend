import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from 'react-native';
import NoImage from '../../assets/blankimage.png';
import Password from "../components/Password"
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';
import TopNavBar from '../components/TopNavBar';

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

export default function SignInPage({ navigation }: Props) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [username, setUsername] = useState('');

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };


  return (
    <SafeAreaView className="w-342">
      <ScrollView>
      {/* <TopNavBar textSize='xl' textValue='Sign In' fontFamily='' haveProgress={false} /> */}
        <View className="">
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-342 h-349 m-4" source={NoImage}></Image>
          </View>
          <View className="mb-6 mx-4">
            <TextInputField
              label="Username"
              value={form.username}
              onChange={handleUsernameChange}
              placeholder=''
            />
            <Password setForm={setForm} form={form} />
          </View>
        </View>
        <View className="mt-4">
          <Button
            onPress={() => navigation.navigate('HomeDash')}
            innerText="Log In"
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
            onPress={() => navigation.navigate('LandingPage')}
            innerText="Back"
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
