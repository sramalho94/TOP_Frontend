import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Modal} from 'react-native';
import CreateAccountContext from '../../context/CreateAccountContext';
import TextInputField from '../../components/TextInputField';
import Button from '../../components/Button';
import TopNavBar from '../../components/TopNavBar';
import PasswordField from '../../components/Password';
import PasswordError from '../../components/PasswordError';

const CreateAccount1: React.FC<{navigation: any}> = ({navigation}) => {
  const {formState, updateFormState} = useContext(CreateAccountContext);
  const [showError, setShowError] = useState<string>('hidden');
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
      alert('Please fill in all mandatory fields.');
      return; // Prevent proceeding to the next page
    }

    // Check if the email is in the correct format
    if (!isEmailValid(formState.email)) {
      alert('Please enter a valid email address.');
      return; // Prevent proceeding to the next page
    }

    const isPasswordValid = checkPasswordCriteria();
    if (!isPasswordValid) {
      setShowError('flex');
    } else {
      setShowError('hidden');
      navigation.navigate('CreateAccount2');
    }
  };

  return (
    <SafeAreaView className="h-screen w-screen bg-themeWhite">
      {/* <ScrollView> */}
      <TopNavBar
        fontFamily=""
        textSize="xl"
        textValue="Create Account"
        haveProgress={true}
        page={1}
      />
      <View className="mx-auto my-auto mb-2">
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
<<<<<<<<< Temporary merge branch 1
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
      <View className="mt-5">
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
      <Modal visible={isModalVisible} transparent={true}>
        <View className="flex-1 justify-center items-center bg-opacity-50">
          <View className="bg-white p-8 rounded-lg w-72 border-4">
            <Text className="text-xl font-bold mb-4">
              Your password must include:
            </Text>
            <Text className="mb-2">- At least 8 characters</Text>
            <Text className="mb-2">
              - One uppercase and one lowercase letter
            </Text>
            <Text className="mb-2">- One number and one special character</Text>
            <View className="flex-1 justify-end ">
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
        </View>
      </Modal>
      {/* </ScrollView> */}
=========
        </View>
        <View className="my-auto">
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
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount1;
