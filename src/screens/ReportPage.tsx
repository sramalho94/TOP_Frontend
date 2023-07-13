import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInputField from '../components/TextInputField';

// function App() {
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//         { label: 'Apple', value: 'apple' },
//         { label: 'Banana', value: 'banana' }
//     ]);
type Props = {};

const ReportPage = (props: Props) => {
  return (
    <SafeAreaView className="">
      <ScrollView>
        <View className="h-[90] border-b-4 border-slate-200 flex-row my-6">
          <TouchableOpacity className="mt-2 ml-4">
            <Icon name="arrowleft" size={30} color="#000" className="" />
          </TouchableOpacity>
          <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
            Report COVID-19 Test Result
          </Text>
        </View>
        <View className="mx-auto my-auto">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>
          <View className="justify-center space-x-4 flex-row my-9">
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Negative</Text>
            </Pressable>
            <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
              <Text>Positive</Text>
            </Pressable>
          </View>
          <View className="w-[342]">
            <TextInputField label="Zip Code*" />
            <TextInputField label="Age*" />
            <Text className="font-bold my-2">Gender</Text>
            <DropDownPicker
              className="my-2 border-2 border-black rounded-lg"
              // open={open}
              // value={value}
              // items={items}
              // setOpen={setOpen}
              // setValue={setValue}
              // setItems={setItems}
            />
            <Text className="font-bold my-2">Race</Text>
            <DropDownPicker
              className="my-2 border-2 border-black rounded-lg"
              // open={open}
              // value={value}
              // items={items}
              // setOpen={setOpen}
              // setValue={setValue}
              // setItems={setItems}
            />
            <Text className="font-bold my-2">Ethnicity</Text>
            <DropDownPicker
              className="my-2 border-2 border-black rounded-lg"
              // open={open}
              // value={value}
              // items={items}
              // setOpen={setOpen}
              // setValue={setValue}
              // setItems={setItems}
            />
          </View>
          <View className="flex-row justify-center my-6">
            <CheckBox />
            <Text className="font-bold mt-1">
              I agree to share my results with the CDC
            </Text>
          </View>
        </View>

        <View className="border-t-4 border-b-4 border-slate-200 ">
          <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg bg-[#B4B4B4] mt-6 mb-8 mx-auto">
            <Text className="text-lg font-bold">Report</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportPage;
