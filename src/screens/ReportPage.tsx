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
import Button from '../components/Button';

type Props = {};

const ReportPage = (props: Props) => {
  const [zipCode, setZipCode] = useState<string>('');
  const [age, setAge] = useState<string>('');

  // need this so that when a user has one dropdown open and selects another, the opened dropdown will close
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

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
            {/* Data found from: https://www.census.gov/newsroom/blogs/random-samplings/2021/08/measuring-racial-ethnic-diversity-2020-census.html */}

            <DropDownField 
              text="Gender" 
              selectItems={[
                {label: "MIGHT CHANGE BELOW SELECTION LATER", value: "MIGHT CHANGE BELOW SELECTION LATER" },
                {label: "", value: "" },
                {label: "Prefer not to say", value: "prefer not to say" },
                ]}
              open={genderOpen}
              onOpen={() => {
                setGenderOpen(true)
                setRaceOpen(false);
                setEthnicityOpen(false);
              }}
              setOpen={setGenderOpen}
              />
            <DropDownField 
              text="Race" 
              selectItems={[
                {label: "MIGHT CHANGE BELOW SELECTION LATER", value: "MIGHT CHANGE BELOW SELECTION LATER" },
                {label: "American Indian or Alaska Native", value: "american indian or alaska native" },
                {label: "Asian", value: "asian" },
                {label: "Black or African American", value: "black or african american" },
                {label: "Native Hawaiian or Other Pacific Islander", value: "native hawaiian or other pacific islander" },
                {label: "Not Specified", value: "not specified" },
                {label: "Two or More Races/Ethnicities", value: "two or more races/ethnicities" },
                {label: "White", value: "white" },
                {label: "Prefer not to say", value: "prefer not to say" },
              ]}
              open={raceOpen}
              onOpen={() => {
                setGenderOpen(false)
                setRaceOpen(true);
                setEthnicityOpen(false);
              }}
              setOpen={setRaceOpen}
            />
            <DropDownField 
              text="Ethnicity" 
              selectItems={[
                {label: "MIGHT CHANGE BELOW SELECTION LATER", value: "MIGHT CHANGE BELOW SELECTION LATER" },
                {label: "Hispanic/Latino", value: "hispanic/latino" },
                {label: "Non-Hispanic/Latino", value: "non-hispanic/latino"},
                {label: "Prefer not to say", value: "prefer not to say" },
              ]}
              open={ethnicityOpen}
              onOpen={() => {
                setGenderOpen(false)
                setRaceOpen(false);
                setEthnicityOpen(true);
              }}
              setOpen={setEthnicityOpen}
          />

          <Button onPress={() => console.log("click")} text="Report" bgColor="" border={true} />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// comment for merge"
export default ReportPage;
