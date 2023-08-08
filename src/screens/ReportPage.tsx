import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import CheckBox from '../components/CheckBox';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import DropDownField from '../components/DropDownField';
import Button from '../components/Button';
import CircleBtn from '../components/CircleBtn';
import ApiService from '../services/ApiService';
import TopNavBar from '../components/TopNavBar';

// Define the ReportPage component
export interface FormState {
  result: boolean;
  DOB: string;
  DOT: string;
  ZIP: string;
  gender: string;
  race: string;
  ethnicity: string;
}

const ReportPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [formState, setFormState] = useState<FormState>({
    result: false,
    DOB: '',
    DOT: '',
    ZIP: '',
    gender: '',
    race: '',
    ethnicity: '',
  });

  const handleReportButtonClick = () => {
    // Call the createTest method from the ApiService
    ApiService.createTest(formState)
      .then(Response => {
        navigation.navigate('ThankYouScreen', { login: false });
        console.log('test created successfully:', Response.data);
        setFormState({
          result: false,
          DOB: '',
          DOT: '',
          ZIP: '',
          gender: '',
          race: '',
          ethnicity: '',
        });
      })
      .catch(Error => {
        console.log('Error creating test:', Error);
      });
  };

  const [isCheckboxSelected, setCheckboxSelection] = useState(false);

  // console.log('Render: ', isCheckboxSelected);

  const handleCheckChanges = () => {
    setCheckboxSelection(prevState => !prevState);
    // console.log('handleCheckChanges: ', isCheckboxSelected);
  };

  const updateFormState = (field: string, value: string | boolean) => {
    setFormState((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // need this so that when a user has one dropdown open and selects another, the opened dropdown will close
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

  return (
    <SafeAreaView className="w-screen h-screen flex-1">
      <ScrollView>
        {/* NavBar */}
        <TopNavBar textValue='Report COVID-19 Test Result' fontFamily='' textSize='xl' haveProgress={false} />

        {/* Page Container */}
        <View className="w-full justify-center items-center flex-1 flex-col">
          <View>
            {/* Test Result Buttons */}
            <Text className="text-lg font-bold mx-auto">
              What were the results of your test?
            </Text>
            <View className="justify-center space-x-4 flex-row my-9">
              <View className="m-2">
                <CircleBtn
                  bgColor="bg-themeLightBlue"
                  updateForm={updateFormState}
                  text="Negative"
                  Btnwidth="w-32"
                  Btnheight="h-32"
                  textSize="base"
                  value={false}
                />
              </View>
              <View className="m-2">
                <CircleBtn
                  text="Positive"
                  bgColor="bg-themeLightOrange"
                  updateForm={updateFormState}
                  Btnwidth="w-32"
                  Btnheight="h-32"
                  textSize="base"
                  value={true}
                />
              </View>
            </View>

            {/* Text input and dropdown fields container */}
            <View className='w-full'>
              <TextInputField
                label="Date of Test*"
                value={formState.DOT}
                onChange={value => updateFormState('DOT', value)}
                placeholder="mm/dd/yyyy"
              />
              <TextInputField
                label="Zip Code*"
                value={formState.ZIP}
                onChange={value => updateFormState('ZIP', value)}
                placeholder="Enter your ZIP code"
              />
              <TextInputField
                label="Date of Birth*"
                value={formState.DOB}
                onChange={value => updateFormState('DOB', value)}
                placeholder="mm/dd/yyyy"
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
                onChange={value => updateFormState('gender', value)}
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
                onChange={value => updateFormState('race', value)}
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
                onChange={value => updateFormState('ethnicity', value)}
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
            <View>
              <Button
                onPress={handleReportButtonClick}
                innerText="Report"
                bgColor="bg-[#B4B4B4]"
                textColor="text-black"
                border={true}
                borderColor="border border-2"
                width="80"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportPage;
