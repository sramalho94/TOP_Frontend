import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import CreateAccountContext from '../../context/CreateAccountContext';
import TextInputField from '../../components/TextInputField';
import Button from '../../components/Button';
import TopNavBar from '../../components/TopNavBar';
import PasswordField from '../../components/Password';
import PasswordError from '../../components/PasswordError';
import CreateAccount from '../../../assets/testNew.jpg';

const CreateAccount1: React.FC<{navigation: any}> = ({navigation}) => {
  const {formState, updateFormState} = useContext(CreateAccountContext);
  const [showError, setShowError] = useState <string>('hidden')
  // Validations:

  // Function to check if password meets criteria
  const checkPasswordCriteria = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(formState.password);
  };

  // Function to check if email format is correct
  const isEmailValid = (email: string): boolean => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleNext = () => {
    // Check if email and username are not empty
    if (!formState.email || !formState.username || !formState.password) {
      // alert('Please fill in all mandatory fields.');
      return; // Prevent proceeding to the next page
    }

    // Check if the email is in the correct format
    if (!isEmailValid(formState.email)) {
      // alert('Please enter a valid email address.');
      return; // Prevent proceeding to the next page
    }

    const isPasswordValid = checkPasswordCriteria();
    if (!isPasswordValid) { 
      setShowError ('flex')
    } else {
      setShowError ('hidden')
      navigation.navigate('CreateAccount2');
    }
  };

  return (
    <SafeAreaView className="flex-1 h-screen w-screen bg-themeWhite">
      <ScrollView>
      <TopNavBar
        fontFamily=""
        textSize="xl"
        textValue="Create Account"
        haveProgress={true}
        page={1}
      />
      <View  accessibilityLabel='Create Account for login Page 1' accessibilityHint='First page in creating a new account. IT asks you to create an email, username, and password' accessibilityRole='header'>
      <View className="flex-1 mx-auto mb-2" >
        <View className="w-[342]">
          <View>
            <Image
              className="mx-auto w-[217px] h-[217px] "
              source={CreateAccount}
            />
            <View className={showError}>
              <PasswordError />
            </View>
          </View>
          <TextInputField
            label="Email*"
            value={formState.email}
            onChange={value => updateFormState('email', value)}
            placeholder="Email"
          />
          <TextInputField
            label="Username*"
            value={formState.username}
            onChange={value => updateFormState('username', value)}
            placeholder="Username"
          />
          <PasswordField
            onChange={value => updateFormState('password', value)}
            password={formState.password}
          />
        </View>
      </View>
      <View className="my-7">
        <Button
          onPress={handleNext}
          innerText="Continue"
          textColor="text-white"
          bgColor="bg-themeBlue"
          border={true}
          borderColor="border border-themeBlue border-2"
          width="80"
          accessLabel='Continue to Next Page'
          accessHint='Continues to Account Page 2 for date of birth, zip code, and optional first name input'
        />
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount1;
