import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
  text: string;
  selectItems: Object[];
  open: boolean;
  onOpen: any;
  setOpen: any;
  onChange: (text: any) => void;
  accessLabel: string;
  accessHint: string;
};

const DropDownField = ({
  text,
  selectItems,
  open,
  onOpen,
  setOpen,
  onChange,
  accessLabel,
  accessHint,
}: Props) => {
  // this sets a value when user selects an option from the dropdown
  const [value, setValue] = useState<string | null>(null);

  return (
    <View className="w-full max-w-sm px-8">
      <Text className="font-bold my-2 capitalize">{text} (Optional)</Text>
      <DropDownPicker
        className="my-2 border border-black rounded-lg"
        open={open}
        items={selectItems}
        value={value}
        onOpen={onOpen}
        setValue={setValue}
        setOpen={setOpen}
        onSelectItem={item => onChange(item.value)}
        dropDownDirection="TOP"
        listMode="SCROLLVIEW"
        placeholder={`Select your ${text.toLowerCase()}`}
        accessible={true}
        accessibilityLabel={accessLabel}
        accessibilityHint={accessHint}
        accessibilityRole="menu"
      />
    </View>
  );
};

export default DropDownField;
