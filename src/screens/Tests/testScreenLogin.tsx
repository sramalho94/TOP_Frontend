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
import {useAuth} from '../../context/AuthContext';

// NOTE: for authentication to work, you need to have the screen wrapped in <AuthProvider></AuthProvider> on App.tsx?? It wouldn't work if I wrapped it in the view in this file.
// NOTE: Put something like this below in App.tsx for testing;
// <AuthProvider>
//   <TestScreenLogin />
// </AuthProvider>

const TestScreenLogin = () => {
  const [userLogin, setUserLogin] = useState<any | undefined>({
    username: '',
    password: '',
  });

  const {onLogin} = useAuth();

  const handleChange: any = (field: string, value: string) => {
    setUserLogin({...userLogin, [field]: value});
  };

  const handleSubmit: any = (e: any) => {
    e.preventDefault();

    if (onLogin) {
      onLogin(userLogin)
        .then((res: any) =>
          console.log('res from login!!: ' + JSON.stringify(res)),
        )
        .catch((error: any) => {
          console.log('Screen Login Err: ' + error);
        });
    } else {
      console.log('onLogin is not a function or is undefined.');
    }
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
            value={userLogin.username}
            onChange={value => handleChange('username', value)}
            placeholder="username"
          />
          <TextInputField
            label="Password"
            value={userLogin.password}
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
