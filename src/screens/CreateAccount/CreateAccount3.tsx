import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Modal } from 'react-native';
import CreateAccountContext from '../../context/CreateAccountContext';
import Button from '../../components/Button';
import TopNavBar from '../../components/TopNavBar';
import DropDownField from '../../components/DropDownField';

const CreateAccount3: React.FC<{navigation: any}> = ({navigation}) => {
  const {formState, updateFormState} = useContext(CreateAccountContext);
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

  const handleNext = () => {
    // Perform any necessary validation before navigating to the next screen
    navigation.navigate('ConsentPage');
    console.log('formState', { formState });
  };

  const handleGenderChange = (value: boolean) => {
    setGenderOpen(value);
  };

  const handleRaceChange = (value: boolean) => {
    setRaceOpen(value);
  };

  const handleEthnicityChange = (value: boolean) => {
    setEthnicityOpen(value);
  };

  return (
    <SafeAreaView className="flex-1 h-screen w-screen bg-themeWhite">
      <ScrollView>
        <TopNavBar
          fontFamily=""
          textSize="xl"
          textValue="Create Account"
          haveProgress={true}
          page={3}
        />
        <View accessibilityHint='Second page in creating a new account. It asks for your date of birth, zip code, and first name' accessibilityRole='header'>
        <View className="mx-auto my-auto justify-between">
          <View className="max-w-lg mt-10">
            <DropDownField
              text="Gender"
              selectItems={[
                {
                  label: 'Woman',
                  value: 'Woman',
                },
                {
                  label: 'Man',
                  value: 'Man',
                },
                {label: 'Non-binary', value: 'Non-binary'},
                {label: 'I prefer not to answer', value: 'I prefer not to answer'},
              ]}
              open={genderOpen}
              onOpen={() => {
                setGenderOpen(true);
                setRaceOpen(false);
                setEthnicityOpen(false);
              }}
              setOpen={handleGenderChange}
              onChange={value => updateFormState('gender', value)}
              accessLabel='gender menu'
              accessHint='Drop down options to select your gender'
            />
            <DropDownField
              text="Race"
              selectItems={[
                {label: 'White or European', value: 'White or European'},
                {
                  label: 'Black or of African descent',
                  value: 'Black or of African descent',
                },
                {label: 'Middle Eastern or North African', value: 'Middle Eastern or North African'},
                {
                  label: 'Indigenous, American Indian or Alaska Native',
                  value: 'Indigenous, American Indian or Alaska Native',
                },
                {
                  label: 'Native Hawaiian or Other Pacific Islander',
                  value: 'native hawaiian or other pacific islander',
                },
                {label: 'East Asian', value: 'East Asian'},
                {label: 'Southeast Asian', value: 'Southeast Asian'},
                {label: 'South Asian', value: 'South Asian'},
                {
                  label: 'Two or More Races/Ethnicities',
                  value: 'two or more races/ethnicities',
                },
                {label: "I prefer not to answer", value: "I prefer not to answer"},
               
              ]}
              open={raceOpen}
              onOpen={() => {
                setGenderOpen(false);
                setRaceOpen(true);
                setEthnicityOpen(false);
              }}
              setOpen={handleRaceChange}
              onChange={value => updateFormState('race', value)}
              accessLabel='race menu'
              accessHint='Drop down options to select your race'
            />
            <DropDownField
              text="Ethnicity"
              selectItems={[
                {label: 'Hispanic/Latino', value: 'hispanic/latino'},
                {
                  label: 'Non-Hispanic/Latino',
                  value: 'Non-hispanic/latino',
                },
                {label: 'I prefer not to answer', value: 'I prefer not to answer'},
              ]}
              open={ethnicityOpen}
              onOpen={() => {
                setGenderOpen(false);
                setRaceOpen(false);
                setEthnicityOpen(true);
              }}
              setOpen={handleEthnicityChange}
              onChange={value => updateFormState('ethnicity', value)}
              accessLabel='ethnicity menu'
              accessHint='Drop down options to select your ethnicity'
            />
          </View>
        </View>
        <View className="mt-40 mx-auto">
          <Button
            onPress={handleNext}
            innerText="Next"
            textColor="text-white"
            bgColor="bg-black"
            border={true}
            borderColor="border border-4"
            width="80"
            accessLabel="Next"
            accessHint="Navigates to the next screen"
          />
        </View>        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount3;
