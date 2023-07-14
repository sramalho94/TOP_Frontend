import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import DropDownField from '../components/DropDownField';

type Props = {};

const ReportPage = (props: Props) => {
  const [zipCode, setZipCode] = useState('');
  const [age, setAge] = useState('');

  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
  };

  const handleAgeChange = (value: string) => {
    setAge(value);
  };

  return (
    <SafeAreaView className="">
      <ScrollView>
        <View className="h-[90] border-b-4 border-slate-200 flex-row my-6">
          <TouchableOpacity className="mt-2 ml-4">
            <Icon name="arrowleft" size={30} color="#000" className="" />
          </TouchableOpacity>
          <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
            Report COVID-19 Test Result
          </Text>
        </View>
        <View className="mx-auto my-auto">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>
          <View className="justify-center space-x-4 flex-row my-9">
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Negative</Text>
            </Pressable>
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Positive</Text>
            </Pressable>
          </View>
          <View className="w-[342]">
            <TextInputField
              label="Zip Code*"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
            <TextInputField
              label="Age*"
              value={age}
              onChange={handleAgeChange}
            />
            

            {/* TODO: will need to probs ask the UX team what the official dropdown selections are */}
            <DropDownField 
              text="Gender" 
              selectItems={[
                {label: "WILL CONFIRM SELECTION LATER", value: "WILL CONFIRM SELECTION LATER" },
                {label: "Prefer not to say", value: "prefer not to say" },
                ]}
              />
            <DropDownField 
              text="Race" 
              selectItems={[
                {label: "WILL CONFIRM SELECTION LATER", value: "WILL CONFIRM SELECTION LATER" },
                {label: "Prefer not to say", value: "prefer not to say" },

              ]}
            />
            <DropDownField 
              text="Ethnicity" 
              selectItems={[
                {label: "WILL CONFIRM SELECTION LATER", value: "WILL CONFIRM SELECTION LATER" },
                {label: "Prefer not to say", value: "prefer not to say" },
              ]}
          />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportPage;
