import React, {useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

// This component has been implemented on Report Page, if you wanted to test

type Props = {
    text: string;
    selectItems: Object[];
    open: boolean;
    onOpen: any;
    setOpen: any;
    onChange: (field: string, value: string) => void;
}

const DropDownField = ({text, selectItems, open, onOpen, setOpen, onChange}: Props) => {


    const handleValueChange = (itemValue: any) => {
        setValue(itemValue);
        console.log("Item value: " + JSON.stringify(itemValue.value))
        onChange(text.toLowerCase(), itemValue.value); // Call the onChange function with the selected value
      };

    // this sets a value when user selects an option from the dropdown
    const [value, setValue] = useState<string | null>(null);

    return (
        <View className="mx-auto">

            <Text className="font-bold my-2 capitalize">{text} (Optional)</Text>
            <DropDownPicker className='my-2 w-80 border border-black rounded-lg'
            open={open}
            items={selectItems}
            value={value}
            onOpen={onOpen}
            setValue={setValue}
            setOpen={setOpen}
            onSelectItem={(item) => handleValueChange(item)}
            dropDownDirection='TOP'
            listMode="SCROLLVIEW"
            placeholder={`Select your ${text.toLowerCase()}`}
            />

        </View>
    )

}

export default DropDownField;