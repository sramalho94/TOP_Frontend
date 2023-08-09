import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Modal} from 'react-native';
import CreateAccountContext from '../../context/CreateAccountContext';
import Button from '../../components/Button';
import TopNavBar from '../../components/TopNavBar';
import DropDownField from '../../components/DropDownField';

const CreateAccount3: React.FC<{navigation: any}> = ({navigation}) => {
  const {formState, updateFormState} = useContext(CreateAccountContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView className="min-w-screen">
      <ScrollView>
        <TopNavBar
          fontFamily=""
          textSize="xl"
          textValue="Create Account"
          haveProgress={true}
          page={3}
        />
        <View className="mx-auto my-auto justify-between">
          <View className="w-[342]">
            <View className="my-4">
              <Button
                onPress={toggleModal}
                innerText="(Why do we need this information?)"
                bgColor=""
                textColor=""
                border={false}
                borderColor="border border-gray"
                textDecoration="underline"
                width="80"
              />
            </View>
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
            />
          </View>
        </View>
        <View className="mt-40">
          <Button
            onPress={handleNext}
            innerText="Next"
            textColor="text-white"
            bgColor="bg-black"
            border={true}
            borderColor="border border-4"
            width="80"
          />
        </View>
        <Modal visible={isModalVisible} transparent={true}>
          <View className="flex-1 justify-center items-center bg-opacity-50 border-4">
            <View className="bg-white p-8 rounded-lg w-72">
              <Text className="text-xl font-bold mb-4">
                Why do we need this information?
              </Text>
              <Text className="mb-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                tempore beatae quasi officia error distinctio illum laboriosam
                ea veniam repellendus aperiam, impedit alias suscipit! Maiores
                sint adipisci repellendus dolor quaerat.
              </Text>
              <Button
                onPress={toggleModal}
                innerText="Close"
                textColor=""
                bgColor="bg-[#B4B4B4]"
                border={false}
                borderColor=""
                width="5/6"
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount3;
