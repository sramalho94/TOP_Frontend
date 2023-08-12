import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, Modal} from 'react-native';
import CreateAccountContext from '../../context/CreateAccountContext';
import TextInputField from '../../components/TextInputField';
import Button from '../../components/Button';
import TopNavBar from '../../components/TopNavBar';

const CreateAccount2: React.FC<{navigation: any}> = ({navigation}) => {
  const {formState, updateFormState} = useContext(CreateAccountContext);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Function to check if email format is correct
  const isBirthdayValid = (birthday: string): boolean => {
    // Regular expression for birthday validation (mm/dd/yyyy format)
    const birthdayPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|3[0-1])\/\d{4}$/;
    return birthdayPattern.test(birthday);
  };

  const isEighteenOrOlder = (birthday: string): boolean => {
    const [month, day, year] = birthday.split('/');

    // Create Date object from birthday string
    const dobDate = new Date(Number(year), Number(month) - 1, Number(day));

    // Create current date object
    const currentDate = new Date();

    // Calculate age of the user
    let age = currentDate.getFullYear() - dobDate.getFullYear();

    // Handles the case where the birthday hasn't happened yet in the current year
    if (
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      age--;
    }

    return age >= 18;
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
      setErrorMessage('Please fill in all mandatory fields.');
      return; // Prevent proceeding to the next page
    }

    if (!isBirthdayValid(formState.DOB)) {
      setErrorMessage('Please enter a valid birthday.');
      return; // Prevent proceeding to the next page
    }

    if (!isEighteenOrOlder(formState.DOB)) {
      setErrorMessage('You must be 18 years or older to create an account.');
      return;
    }

    // Check if the zip code is in the correct format
    if (!isZipCodeValid(formState.ZIP)) {
      setErrorMessage('Please enter a valid zip code.');
      return; // Prevent proceeding to the next page
    } else {
      setErrorMessage('')
      navigation.navigate('CreateAccount3');
    }
  };

  return (
    <SafeAreaView className="bg-white min-w-screen min-h-screen">
      {/* <ScrollView> */}
        <TopNavBar
          fontFamily=""
          textSize="xl"
          textValue="Create Account"
          haveProgress={true}
          page={2}
        />

    <View accessibilityLabel='Create Account for login Page 2' accessibilityHint='Second page in creating a new account. It asks for your date of birth, zip code, and first name' accessibilityRole='header'>
      <View className="mx-auto mb-3 mt-10">
        <View className="w-[342]">

        {errorMessage ? (
          <View className="mt-0 p-2 bg-red-100 border border-red-500 mx-auto w-[315]">
            <Text className="text-red-500">{errorMessage}</Text>
          </View>
        ) : null}
        <View className="">
          <TextInputField
            label="Date of Birth*"
            value={formState.DOB}
            onChange={value => updateFormState('DOB', value)}
            placeholder="MM/DD/YYYY"
          />
          <TextInputField
            label="Zip Code*"
            value={formState.ZIP}
            onChange={value => updateFormState('ZIP', value)}
            placeholder="XXXXX"
          />
          <TextInputField
            label="First Name"
            value={formState.firstName}
            onChange={value => updateFormState('firstName', value)}
            placeholder="Your First Name"
          />
        </View>
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
          accessLabel="Next"
          accessHint="Navigates to the next screen"
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

export default CreateAccount2;
