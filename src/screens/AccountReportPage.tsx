import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import TopNavBar from '../components/TopNavBar';
import CircleBtn from '../components/CircleBtn';
import { NavigationProp } from '@react-navigation/native';


type Props = {
  navigation: NavigationProp<any>;
};

const AccountReportPage = ({ navigation }: Props) => {
  // State for storing the zip code
  const [zipCode, setZipCode] = useState('');
  // State for storing the state
  const [state, setState] = useState('');

  // Update the zip code state when the input value changes
  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
  };
  // Update the state state when the input value changes
  const handleStateChange = (value: string) => {
    setState(value);
  };

  // writing comment to push changes from earlier

  return (
    <SafeAreaView className="min-w-screen">
      <ScrollView>

        {/* Page container */}
        <View className="justify-center mx-auto max-w-sm my-6">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>

          {/* Result Buttons Container */}
          <View className="justify-center space-x-4 flex-row my-8">
            <View className="m-2">
              <CircleBtn
                bgColor="bg-themeLightBlue"
                onPress={() => console.log("You're Clear!!")}
                text="Negative"
                Btnsize="125"
              />
            </View>
            <View className="m-2">
              <CircleBtn
                text="Positive"
                bgColor="bg-themeLightOrange"
                onPress={() => console.log("You're Sick!!")}
                Btnsize="125"
              />
            </View>
          </View>

          {/* Text input fields container */}
          <View className="mx-4">
            <TextInputField
              label="State*"
              value={state}
              onChange={handleStateChange}
              placeholder="Enter your state"
            />
            <TextInputField
              label="Zip Code*"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="Enter your ZIP code"
            />
          </View>

          {/* Submit button */}
          <View className="my-64">
            <Button
              onPress={() => navigation.navigate('ThankYouScreen')}
              innerText="Submit"
              textColor="text-white"
              bgColor="bg-black"
              border={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountReportPage;