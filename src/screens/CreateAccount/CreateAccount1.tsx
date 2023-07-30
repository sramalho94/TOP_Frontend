import React, { useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Modal } from 'react-native';
import CreateAccountContext from '../../context/CreateAccountContext';
import TextInputField from '../../components/TextInputField';
import Button from '../../components/Button';
import TopNavBar from '../../components/TopNavBar';
import PasswordField from '../../components/Password';


const CreateAccount1: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { formState, updateFormState } = useContext(CreateAccountContext);
  
    const handleNext = () => {
      // Perform any necessary validation before navigating to the next screen
      navigation.navigate('Screen2');
    };


    const toggleModal = () => {

    }
  
    return (
        <SafeAreaView className="min-w-screen">
        <ScrollView>
          <TopNavBar
            fontFamily=""
            textSize="xl"
            textValue="Create Account"
            haveProgress={true}
            page={1}
          />
          <View className="mx-auto my-auto mb-2">
            <View className="w-[342] mt-4">
              <TextInputField
                label="Email*"
                value={email}
                onChange={handleEmailChange}
                placeholder=""
              />
              <TextInputField
                label="Username*"
                value={username}
                onChange={handleUsernameChange}
                placeholder=""
              />
              <PasswordField onChange={handleChange} password={formState.password} />
            </View>
          </View>
          <View className="mt-48">
            <Button
              onPress={handleSubmitPage1}
              innerText="Next"
              textColor="text-white"
              bgColor="bg-black"
              border={true}
              borderColor="border border-4"
              width='80'
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
                <Text className="mb-2">
                  - One number and one special character
                </Text>
                <Button
                  onPress={toggleModal}
                  innerText="Close"
                  textColor=""
                  bgColor="bg-[#B4B4B4]"
                  border={true}
                  borderColor="border border-4"
                  width='5/6'
                />
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default CreateAccount1;