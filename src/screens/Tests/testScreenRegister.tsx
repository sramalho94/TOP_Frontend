import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { useState } from 'react';
import ApiService from '../../services/ApiService';
import { AuthProvider, useAuth } from '../../context/AuthContext';

const testScreenRegister = () => {

    const [userSignUp, setUserSignUp] = useState<any>({username: "", password: "", DOB: "1920-01-01", state: "DL", ZIP: "11111", firstName: "asdf", gender: "M", ethnicity: "prefer not to say", race: "prefer not to say"})

    const { onRegister } = useAuth();

    const handleChange:any = (field: string, value: string) => {
        setUserSignUp({...userSignUp, [field]: value})
    }

    const handleSubmit:any = (e: any) => {
      if (onRegister) {
        console.log("onRegister exists")
      } else {
        console.log("onRegister does not exist")
      }
      e.preventDefault()
      
      if (onRegister) {
        
        console.log("woooo")
        onRegister(userSignUp)
          .then((res: any) => console.log("res from posting!!ssss: " + res))
          .catch((error: any) => {
            console.log("Screen Register Messagessss: " + error);
          });
      } else {
        console.log("onRegister is not a function or is undefined.");
      }
    }

  return (
    <SafeAreaView className="mx-auto my-auto">
        <ScrollView>
      <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto">
        <Text className="m-auto text-center text-3xl">Test Screen for Registration</Text>
      </View>
      <View className="mt-[87] space-y-[12] mb-[12]">

        <TextInputField 
        label='Username'
        value={userSignUp.username}
        onChange={(value) => handleChange('username', value)}
        placeholder='username'
        />
        <TextInputField 
        label='Password'
        value={userSignUp.password}
        onChange={(value) => handleChange('password', value)}
        placeholder='password'
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
