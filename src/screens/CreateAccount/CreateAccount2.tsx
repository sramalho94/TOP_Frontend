import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Modal} from 'react-native';
import CreateAccountContext from '../../context/CreateAccountContext';
import TextInputField from '../../components/TextInputField';
import Button from '../../components/Button';
import TopNavBar from '../../components/TopNavBar';

const CreateAccount2: React.FC<{navigation: any}> = ({navigation}) => {
  const {formState, updateFormState} = useContext(CreateAccountContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to check if email format is correct
  const isBirthdayValid = (birthday: string): boolean => {
    // Regular expression for birthday validation (mm/dd/yyyy format)
    const birthdayPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|3[0-1])\/\d{4}$/;
    return birthdayPattern.test(birthday);
  };

  // Function to check if zip code format is correct
  const isZipCodeValid = (zipCode: string): boolean => {
    // Regular expression for US zip code validation (5 digits)
    const zipCodePattern = /^\d{5}$/;
    return zipCodePattern.test(zipCode);
  };

  const handleNext = () => {
    // Check if email and username are not empty
    if (!formState.DOB || !formState.ZIP) {
      alert('Please fill in all mandatory fields.');
      return; // Prevent proceeding to the next page
    }

    if (!isBirthdayValid(formState.DOB)) {
      alert('Please enter a valid birthday.');
      return; // Prevent proceeding to the next page
    }

    // Check if the zip code is in the correct format
    if (!isZipCodeValid(formState.ZIP)) {
      alert('Please enter a valid zip code.');
      return; // Prevent proceeding to the next page
    } else {
      navigation.navigate('CreateAccount3');
    }
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
          page={2}
        />

        <View className="mx-auto my-auto mb-3">
          <View className="w-[342]">
            <View className="my-4 underline">
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
            <TextInputField
              label="Birthday*"
              value={formState.DOB}
              onChange={value => updateFormState('DOB', value)}
              placeholder=""
            />
            <TextInputField
              label="Zip Code*"
              value={formState.ZIP}
              onChange={value => updateFormState('ZIP', value)}
              placeholder=""
            />
          </View>
        </View>
        <View className="mt-56">
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
          <View className="flex-1 justify-center items-center bg-opacity-50">
            <View className="bg-white p-8 rounded-lg w-72 border-4">
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
                border={true}
                borderColor="border border-4"
                width="5/6"
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount2;