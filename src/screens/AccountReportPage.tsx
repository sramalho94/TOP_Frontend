import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import TopNavBar from '../components/TopNavBar';

type Props = {};

const AccountReportPage = (props: Props) => {
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

  return (
    <SafeAreaView className="min-w-screen">
      <ScrollView>
        <TopNavBar
          textSize="xl"
          fontFamily=""
          haveProgress={false}
          textValue="Report COVID-19 Test Result"
        />

        <View className="mx-auto my-auto">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>
          <View className="justify-center space-x-4 flex-row my-8">
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Negative</Text>
            </Pressable>
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Positive</Text>
            </Pressable>
          </View>
          <View className="w-[342] mx-4">
            <TextInputField
              label="State*"
              value={state}
              onChange={handleStateChange}
              placeholder="Michigan"
            />
            <TextInputField
              label="Zip Code*"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="49301"
            />
          </View>
          <View className="my-4">
            <Button
              onPress={() => {}}
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
