import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import {useState} from 'react';
import ApiService from '../../services/ApiService';

const TestScreenLogin = () => {
  const [userSignUp, setUserSignUp] = useState<any | undefined>({
    username: '',
    password: '',
  });

  const handleChange: any = (field: string, value: string) => {
    setUserSignUp({...userSignUp, [field]: value});
  };

  const handleSubmit: any = (e: any) => {
    e.preventDefault();

    ApiService.login(userSignUp)
      .then(res => console.log('res from posting login!!!: ' + res))
      .catch(error => {
        console.log('Login Error Message: ' + error);
      });
  };

  return (
    <SafeAreaView className="mx-auto my-auto">
      <ScrollView>
        <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto">
          <Text className="m-auto text-center text-3xl">
            Test Screen for Login
          </Text>
        </View>
        <View className="mt-[40] space-y-[12] mb-[12]">
          <TextInputField
            label="Username"
            value={userSignUp.username}
            onChange={value => handleChange('username', value)}
            placeholder="username"
          />
          <TextInputField
            label="Password"
            value={userSignUp.password}
            onChange={value => handleChange('password', value)}
            placeholder="password"
          />

        <Button
          onPress={handleSubmit}
          innerText="Login"
          bgColor="bg-[#B4B4B4]"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
        />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestScreenLogin;
