import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, Modal} from 'react-native';
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
      alert('Please fill in all mandatory fields.');
      return; // Prevent proceeding to the next page
    }

    if (!isBirthdayValid(formState.DOB)) {
      alert('Please enter a valid birthday.');
      return; // Prevent proceeding to the next page
    }

    if (!isEighteenOrOlder(formState.DOB)) {
      alert('You must be 18 years or older to create an account.');
      return;
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
    <SafeAreaView className="flex-1 h-screen w-screen bg-themeWhite">
      <TopNavBar
        fontFamily=""
        textSize="xl"
        textValue="Create Account"
        haveProgress={true}
        page={2}
      />

      <View className="flex-1 mx-auto my-auto mb-3">
        <View className="w-[342] mt-10">
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

      <View className="flex-1 mt-4 flex-col-reverse ">
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

export default CreateAccount2;
