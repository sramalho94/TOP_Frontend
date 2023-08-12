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
      <View className="mx-auto my-auto mt-5 mb-6">
        <View className="w-[342]">
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
      <View className="flex-1 mb-5 justify-end ">
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
