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
import {AuthProvider, useAuth} from '../../context/AuthContext';

// NOTE: for authentication to work, you need to have the screen wrapped in <AuthProvider></AuthProvider> on App.tsx?? It wouldn't work if I wrapped it in the view in this file.
// NOTE: Put something like this below in App.tsx for testing;
// <AuthProvider>
//   <TestScreenRegister />
// </AuthProvider>

const testScreenRegister = () => {
  const [userSignUp, setUserSignUp] = useState<any>({
    email: 'email@email.com',
    username: '',
    password: '',
    DOB: '1920-01-01',
    state: 'DL',
    ZIP: '11111',
    firstName: 'asdf',
    gender: 'M',
    ethnicity: 'prefer not to say',
    race: 'prefer not to say',
  });

  const {onRegister} = useAuth();

  const handleChange: any = (field: string, value: string) => {
    setUserSignUp({...userSignUp, [field]: value});
  };

  const handleSubmit: any = (e: any) => {
    e.preventDefault();

    if (onRegister) {
      onRegister(userSignUp)
        .then((res: any) => console.log('res from register!!: ' + JSON.stringify(res)))
        .catch((error: any) => {
          console.log('Screen Register Err: ' + error);
        });
    } else {
      console.log('onRegister is not a function or is undefined.');
    }
  };

  return (
    <SafeAreaView className="mx-auto my-auto">
      <ScrollView>
        <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto">
          <Text className="m-auto text-center text-3xl">
            Test Screen for Registration
          </Text>
        </View>
        <View className="mt-[87] space-y-[12] mb-[12]">
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
            innerText="Create an Account"
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

export default testScreenRegister;
