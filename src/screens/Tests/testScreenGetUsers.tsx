import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { useState } from 'react';
import ApiService from '../../services/ApiService';
import { type } from 'os';

interface ApiResponse {
  data: {
    user: {
      DOB: string;
      state: string;
      ZIP: string;
      firstName: string;
      gender: string;
      ethnicity: string;
      race: string;
      id: number;
      username: string;
      passwordDigest: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}


const testScreenGetUsers = () => {

  const [userInfo, setUserInfo] = useState<ApiResponse['data']['user'] | null>(null)

    const handleSubmit:any = (e: any) => {
        e.preventDefault()

        ApiService.getUserById(2)
        .then((res: any) => setUserInfo(res.data.user))
        .catch(error => {
            console.log("Get Users Message: " + error);
        });
    }

  return (
    <SafeAreaView className="mx-auto my-auto">
        <ScrollView>
      <View className="border-2 border-black w-[342] h-[339] mt-[100] mx-auto">
        <Text className="m-auto text-center text-3xl">Test Screen for Get All Users</Text>
      </View>
      <View className="mt-[20] space-y-[12] mb-[12]">
        <Button
          onPress={handleSubmit}
          innerText="Print all Users"
          bgColor="bg-[#B4B4B4]"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
        />
        
        {userInfo && (
          <View>
            <Text>Username: {userInfo.username}</Text>
            <Text>Birthday: {userInfo.DOB}</Text>
            <Text>State: {userInfo.state}</Text>
          </View>
        )}


      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default testScreenGetUsers;
