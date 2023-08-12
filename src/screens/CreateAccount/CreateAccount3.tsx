import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Modal} from 'react-native';
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
    console.log('formState', {formState});
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
      <TopNavBar
        fontFamily=""
        textSize="xl"
        textValue="Create Account"
        haveProgress={true}
        page={3}
      />
      <View className="mx-auto my-auto mb-6">
        <View className="w-[342]">
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
            setOpen={handleGenderChange}
            onChange={value => updateFormState('gender', value)}
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
            setOpen={handleRaceChange}
            onChange={value => updateFormState('race', value)}
          />
          <DropDownField
            text="Ethnicity"
            selectItems={[
              {
                label: 'MIGHT CHANGE BELOW SELECTION LATER',
                value: 'MIGHT CHANGE BELOW SELECTION LATER',
              },
              {label: 'Hispanic/Latino', value: 'hispanic/latino'},
              {
                label: 'Non-Hispanic/Latino',
                value: 'non-hispanic/latino',
              },
              {label: 'Prefer not to say', value: 'prefer not to say'},
            ]}
            open={ethnicityOpen}
            onOpen={() => {
              setGenderOpen(false);
              setRaceOpen(false);
              setEthnicityOpen(true);
            }}
            setOpen={handleEthnicityChange}
            onChange={value => updateFormState('ethnicity', value)}
          />
        </View>
      </View>
      <View className="flex-1 justify-end ">
        <Button
          onPress={handleNext}
          innerText="Continue"
          textColor="text-white"
          bgColor="bg-themeBlue"
          border={true}
          borderColor="border border-themeBlue border-2"
          width="80"
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount3;
