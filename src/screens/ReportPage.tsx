import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '../components/CheckBox';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import DropDownField from '../components/DropDownField';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import CircleBtn from '../components/CircleBtn';
import TopNavBar from '../components/TopNavBar';

type Props = {};

// Define the ReportPage component

const ReportPage = (props: Props) => {
  // Define state variables for zip code and age
  const [zipCode, setZipCode] = useState('');
  const [age, setAge] = useState('');
  const [isCheckboxSelected, setCheckboxSelection] = useState(false);

  console.log('Render: ', isCheckboxSelected);

  const handleCheckChanges = () => {
    setCheckboxSelection(prevState => !prevState);
    console.log('handleCheckChanges: ', isCheckboxSelected);
  };

  // Function to handle zip code changes
  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
  };
  // Function to handle age changes
  const handleAgeChange = (value: string) => {
    setAge(value);
  };

  // need this so that when a user has one dropdown open and selects another, the opened dropdown will close
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

  return (
    <SafeAreaView className="w-screen h-screen">
      <ScrollView>
        {/* NavBar */}
        <View className="h-[90] border-b-4 border-slate-200 flex-row my-6">
          <TouchableOpacity className="mt-2 ml-4">
            <Icon name="arrowleft" size={30} color="#000" className="" />
          </TouchableOpacity>
          <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
            Report COVID-19 Test Result
          </Text>
        </View>

        {/* Page Container */}
        <View className="w-full justify-center items-center flex-1 flex-col">
          <View className="max-w-sm">
          {/* Test Result Buttons */}
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>
          <View className="justify-center space-x-4 flex-row my-9">
            <View className="m-2">
              <CircleBtn
                bgColor="bg-themeLightBlue"
                onPress={() => console.log("You're Clear!!")}
                text="Negative"
                Btnwidth="w-32"
                Btnheight="h-32"
                textSize='base'
              />
            </View>
            <View className="m-2">
              <CircleBtn
                text="Positive"
                bgColor="bg-themeLightOrange"
                onPress={() => console.log("You're Sick!!")}
                Btnwidth="w-32"
                Btnheight="h-32"
                textSize='base'
              />
            </View>
          </View>

          {/* Text input and dropdown fields container */}
          <View className="">
            <TextInputField
              label="Zip Code*"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="Enter your ZIP code"
            />
            <TextInputField
              label="Age*"
              value={age}
              onChange={handleAgeChange}
              placeholder="Enter your age"
            />

            {/* TODO: will need to probs ask the UX team what the official dropdown selections are */}
            {/* Data found from: https://www.census.gov/newsroom/blogs/random-samplings/2021/08/measuring-racial-ethnic-diversity-2020-census.html */}
            <DropDownField
              text="Gender"
              selectItems={[
                {
                  label: 'MIGHT CHANGE BELOW SELECTION LATER',
                  value: 'MIGHT CHANGE BELOW SELECTION LATER',
                },
                {label: '', value: ''},
                {label: 'Prefer not to say', value: 'prefer not to say'},
              ]}
              open={genderOpen}
              onOpen={() => {
                setGenderOpen(true);
                setRaceOpen(false);
                setEthnicityOpen(false);
              }}
              setOpen={setGenderOpen}
            />
            <DropDownField
              text="Race"
              selectItems={[
                {
                  label: 'MIGHT CHANGE BELOW SELECTION LATER',
                  value: 'MIGHT CHANGE BELOW SELECTION LATER',
                },
                {
                  label: 'American Indian or Alaska Native',
                  value: 'american indian or alaska native',
                },
                {label: 'Asian', value: 'asian'},
                {
                  label: 'Black or African American',
                  value: 'black or african american',
                },
                {
                  label: 'Native Hawaiian or Other Pacific Islander',
                  value: 'native hawaiian or other pacific islander',
                },
                {label: 'Not Specified', value: 'not specified'},
                {
                  label: 'Two or More Races/Ethnicities',
                  value: 'two or more races/ethnicities',
                },
                {label: 'White', value: 'white'},
                {label: 'Prefer not to say', value: 'prefer not to say'},
              ]}
              open={raceOpen}
              onOpen={() => {
                setGenderOpen(false);
                setRaceOpen(true);
                setEthnicityOpen(false);
              }}
              setOpen={setRaceOpen}
            />
            <DropDownField
              text="Ethnicity"
              selectItems={[
                {
                  label: 'MIGHT CHANGE BELOW SELECTION LATER',
                  value: 'MIGHT CHANGE BELOW SELECTION LATER',
                },
                {label: 'Hispanic/Latino', value: 'hispanic/latino'},
                {label: 'Non-Hispanic/Latino', value: 'non-hispanic/latino'},
                {label: 'Prefer not to say', value: 'prefer not to say'},
              ]}
              open={ethnicityOpen}
              onOpen={() => {
                setGenderOpen(false);
                setRaceOpen(false);
                setEthnicityOpen(true);
              }}
              setOpen={setEthnicityOpen}
            />
          </View>

          {/* checkbox and text container */}
          <View className="flex-row justify-center my-6">
            <CheckBox
              isSelected={isCheckboxSelected}
              handleCheckChanges={handleCheckChanges}
            />
            <Text className="font-bold mt-1 text-black">
              I agree to share my results with the CDC
            </Text>
          </View>

          {/* button container */}
          <View className="mb-14">
            <Button
              onPress={() => console.log('pressed')}
              innerText="Report"
              bgColor="bg-[#B4B4B4]"
              textColor="text-black"
              border={true}
              borderColor="border border-2"
              width='80'
            />
          </View>
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportPage;