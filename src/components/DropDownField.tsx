import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

// This component has been implemented on Report Page, if you wanted to test

type Props = {
  text: string;
  selectItems: Object[];
  open: boolean;
  onOpen: any;
  setOpen: any;
  onChange: (field: string, value: string) => void;
};

const DropDownField = ({text, selectItems, open, onOpen, setOpen}: Props) => {
  //  TODO: will need to probs ask the UX team what the official dropdown selections are
  //  Data found from: https://www.census.gov/newsroom/blogs/random-samplings/2021/08/measuring-racial-ethnic-diversity-2020-census.html

  // this sets a value when user selects an option from the dropdown
  const [value, setValue] = useState<string | null>(null);

  return (
    <View className="mx-auto">
      <Text className="font-bold my-2 capitalize">{text} (Optional)</Text>
      <DropDownPicker
        className="my-2 w-80 border border-black rounded-lg"
        open={open}
        items={selectItems}
        value={value}
        onOpen={onOpen}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={item => handleValueChange(item)}
        dropDownDirection="TOP"
        listMode="SCROLLVIEW"
        placeholder={`Select your ${text.toLowerCase()}`}
      />
    </View>
  );
};

export default DropDownField;
