import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { useState } from 'react';
import ApiService from '../../services/ApiService';
import { type } from 'os';

interface ApiGetAllResponse {
  data: {
    users: [{
      email: string;
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
    }];
  };
}
interface ApiByIdResponse {
  data: {
    users: {
      email: string;
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

// can try deleting and editing the user on this page too

const testScreenGetUsers = () => {

  const [userInfo, setUserInfo] = useState<ApiByIdResponse['data']['users'] | null>(null)
  const [allUserInfo, setAllUserInfo] = useState<ApiGetAllResponse['data'] | null>(null)

    const handleSubmit:any = (e: any) => {
        e.preventDefault()

        // TODO: get all users to work! Check backend tests
        ApiService.getAllUsers()
        .then((res: any) => setAllUserInfo(res.data))
        .catch(error => {
            console.log("Get Users Message: " + error);
        });


    }

    const handleGetIdSubmit = () => {
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
          innerText="Print All Users"
          bgColor="bg-[#B4B4B4]"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
        />
        <Button
          onPress={handleGetIdSubmit}
          innerText="Print User with id 2"
          bgColor="bg-[#B4B4B4]"
          textColor="text-black"
          border={true}
          borderColor="border border-4"
        />
        
        <Text className="text-black text-2xl underline">User Id 2</Text>
        
        

        {/* TODO:  try to loop through all users (probably wont use, but want to check all function)  */}
        {userInfo && (
          <View>
            <Text>Hello?</Text>
            <Text>Username: {userInfo.username}</Text>
            <Text>Birthday: {userInfo.DOB}</Text>
            <Text>State: {userInfo.state}</Text>
          </View>
        )}

        <Text className="text-black text-2xl underline">All Users</Text>
        {allUserInfo?.users.map((user: any) => {
          return (
          <View key={user.id}>
            <Text className="text-black">Username: {user.username}</Text>
            <Text className="text-black">Birthday: {user.DOB}</Text>
            <Text className="text-black">State: {user.state}</Text>
          </View>

        )})}

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default testScreenGetUsers;
