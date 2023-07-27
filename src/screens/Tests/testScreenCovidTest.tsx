import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { useState } from 'react';
import ApiService from '../../services/ApiService';
import CircleBtn from '../../components/CircleBtn';

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

// covid get all data, delete, edit

const testScreenGetUsers = () => {

  const [covidInfo, setCovidInfo] = useState<ApiResponse['data']['test'] | null>(null)

  const [covidSubmit, setCovidSubmit] = useState<any | undefined>({result: false, ZIP: '', gender: '', race: '', ethnicity: ''})

//   const handleChange:any = (field: string, value: string) => {
      
//   }


    const handleChange:any = () => {
        setCovidSubmit({...covidSubmit, [field]: value})
    }


    const handleSubmit:any = (e: any) => {
        e.preventDefault()

        ApiService.createTest()
        .then((res: any) => setCovidInfo(res.data.user))
        .catch(error => {
            console.log("Get Users Message: " + error);
        });
    }

  return (
    <SafeAreaView className="mx-auto my-auto">
        <ScrollView>
      <View className="border-2 border-black w-[342] h-[100] mt-[100] mx-auto">
        <Text className="m-auto text-center text-3xl">Test Screen for All Covid Tests</Text>
      </View>
      <View className="mt-[20] mb-[12]">

      <View className="justify-center space-x-4 flex-row my-9">
            <View className="m-2">
              <CircleBtn
                bgColor="bg-themeLightBlue"
                onPress={() => handleChange(false)}
                text="Negative"
                Btnsize={125}
              />
            </View>
            <View className="m-2">
              <CircleBtn
                text="Positive"
                bgColor="bg-themeLightOrange"
                onPress={() => handleChange(true)}
                Btnsize={125}
              />
            </View>
          </View>
        <TextInputField 
        label='ZIP:'
        value={covidSubmit.ZIP}
        onChange={handleChange}
        placeholder=''
        />
        <TextInputField 
        label='Gender:'
        value={covidSubmit.gender}
        onChange={handleChange}
        placeholder=''
        />
        <TextInputField 
        label='Race:'
        value={covidSubmit.race}
        onChange={handleChange}
        placeholder=''
        />
        <TextInputField 
        label='Ethnicity:'
        value={covidSubmit.ethnicity}
        onChange={handleChange}
        placeholder=''
        />

        <Button
          onPress={handleSubmit}
          innerText="Create Test"
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

export default testScreenGetUsers;
