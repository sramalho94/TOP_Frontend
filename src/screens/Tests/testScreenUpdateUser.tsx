import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { useState } from 'react';
import ApiService from '../../services/ApiService';

const testScreenUpdateUser = () => {

    const [pwUpdate, setPwUpdate] = useState<any | undefined>({username: "", oldPassword: "", newPassword: ""})

    const handleChange:any = (field: string, value: string) => {
        setPwUpdate({...pwUpdate, [field]: value})
    }

    const handleSubmit:any = (e: any) => {
        e.preventDefault()

        ApiService.updatePassword(pwUpdate)
        .then((res: any) => console.log("res for updating pw!!: " + res))
        .catch((error: any) => {
            console.log("Message: " + error);
        });
    }

  return (
    <SafeAreaView className="mx-auto my-auto">
        <ScrollView>
      <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto smMax:bg-slate-500">
        <Text className="m-auto text-center text-3xl">Test Screen for Update PW</Text>
      </View>
      <View className="mt-[87] space-y-[12] mb-[12]">

        <TextInputField 
        label='Username'
        value={pwUpdate.username}
        onChange={(value) => handleChange('username', value)}
        placeholder='username'
        />
        <TextInputField 
        label='Old Password'
        value={pwUpdate.oldPassword}
        onChange={(value) => handleChange('oldPassword', value)}
        placeholder='password'
        />

        <TextInputField 
        label='New Password'
        value={pwUpdate.newPassword}
        onChange={(value) => handleChange('newPassword', value)}
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

export default testScreenUpdateUser;
