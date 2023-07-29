import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import {useState} from 'react';
import ApiService from '../../services/ApiService';
import CircleBtn from '../../components/CircleBtn';
import DropDownField from '../../components/DropDownField';

// NOTE: for authentication to work, you need to have the screen wrapped in <AuthProvider></AuthProvider> on App.tsx?? It wouldn't work if I wrapped it in the view in this file.
// NOTE: Put something like this below in App.tsx for testing;
// <AuthProvider>
//   <TestScreenCovidTest />
// </AuthProvider>

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

const testScreenCovidTest = () => {
  const [covidInfo, setCovidInfo] = useState<ApiResponse | null>(null);

  const [covidSubmit, setCovidSubmit] = useState<any | undefined>({
    result: false,
    ZIP: '',
    gender: '',
    race: '',
    ethnicity: '',
  });

  const [testInfo, setTestInfo] = useState<any | null>(null);

  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

  const handleChange: any = (field: string, value: string) => {
    setCovidSubmit({...covidSubmit, [field]: value});
  };

  const handleSubmit: any = (e: any) => {
    e.preventDefault();

    console.log('covidsubmit data: ' + JSON.stringify(covidSubmit));
    ApiService.createTest(covidSubmit)
      .then((res: any) => setCovidInfo(res.data.user))
      .catch(error => {
        console.log('Create Covid Message: ' + error);
      });
    console.log('Covid Info: ' + JSON.stringify(covidSubmit));
  };

  const handleGetSubmit: any = (e: any) => {
    e.preventDefault();
    ApiService.getAllTests()
      .then((res: any) => console.log(JSON.stringify(res)))
      .catch(error => {
        console.log('Get Users Message: ' + error);
      });
  };

  return (
    <SafeAreaView className="mx-auto my-auto">
      <ScrollView>
        <View className="border-2 border-black w-[342] h-[100] mt-[100] mx-auto">
          <Text className="m-auto text-center text-3xl">
            Test Screen for All Covid Tests
          </Text>
        </View>
        <View className="mt-[20] mb-[12]">
          <View className="justify-center space-x-4 flex-row my-9">
            <View className="m-2">
              <CircleBtn
                bgColor="bg-themeLightBlue"
                onPress={() => handleChange('result', false)}
                text="Negative"
                Btnwidth="w-32"
                Btnheight="h-32"
              />
            </View>
            <View className="m-2">
              <CircleBtn
                text="Positive"
                bgColor="bg-themeLightOrange"
                onPress={() => handleChange('result', true)}
                Btnwidth="w-32"
                Btnheight="h-32"
              />
            </View>
          </View>
          <TextInputField
            label="ZIP:"
            value={covidSubmit.ZIP}
            onChange={value => handleChange('ZIP', value)}
            placeholder="Enter your ZIP code"
          />

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            setOpen={setEthnicityOpen}
          />

          <Button
            onPress={handleSubmit}
            innerText="Create Test"
            bgColor="bg-[#B4B4B4]"
            textColor="text-black"
            border={true}
            borderColor="border border-4"
          />
          <Button
            onPress={handleGetSubmit}
            innerText="Get All Tests"
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

export default testScreenCovidTest;
