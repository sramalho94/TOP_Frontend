import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '../components/CheckBox';
import TextInputField from '../components/TextInputField';
import DropDownField from '../components/DropDownField';
import Button from '../components/Button';
import CircleBtn from '../components/CircleBtn';
import TopNavBar from '../components/TopNavBar';

// Define the ReportPage component

const ReportPage = () => {
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
    <SafeAreaView className="min-w-screen">
      <ScrollView>
        {/* NavBar */}
        <TopNavBar
          textSize="xl"
          fontFamily=""
          haveProgress={false}
          textValue="Report COVID-19 Test Result"
        />

        {/* Test Result Buttons */}
        <View className="mx-auto my-auto">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>
          <View className="justify-center space-x-4 flex-row my-9">
            <View className="m-2">
              <CircleBtn
                bgColor="bg-themeLightBlue"
                onPress={() => console.log("You're Clear!!")}
                text="Negative"
                Btnsize={125}
              />
            </View>
            <View className="m-2">
              <CircleBtn
                text="Positive"
                bgColor="bg-themeLightOrange"
                onPress={() => console.log("You're Sick!!")}
                Btnsize={125}
              />
            </View>
          </View>

          {/* Text input and dropdown fields container */}
          <View className="w-[342]">
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
                { label: '', value: '' },
                { label: 'Prefer not to say', value: 'prefer not to say' },
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
                { label: 'Asian', value: 'asian' },
                {
                  label: 'Black or African American',
                  value: 'black or african american',
                },
                {
                  label: 'Native Hawaiian or Other Pacific Islander',
                  value: 'native hawaiian or other pacific islander',
                },
                { label: 'Not Specified', value: 'not specified' },
                {
                  label: 'Two or More Races/Ethnicities',
                  value: 'two or more races/ethnicities',
                },
                { label: 'White', value: 'white' },
                { label: 'Prefer not to say', value: 'prefer not to say' },
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
                { label: 'Hispanic/Latino', value: 'hispanic/latino' },
                { label: 'Non-Hispanic/Latino', value: 'non-hispanic/latino' },
                { label: 'Prefer not to say', value: 'prefer not to say' },
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
            <Text className="font-bold my-auto pl-2">
              I agree to share my results with the CDC
            </Text>
          </View>
        </View>

        {/* button container */}
        <View className="mb-14">
          <Button
            onPress={() => console.log('pressed')}
            innerText="Report"
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

export default ReportPage;
