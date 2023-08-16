import React from 'react';
import {View, Text, TextInput} from 'react-native';

// Define the props interface for TextInputField component
interface TextInputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (inputValue: string) => {
    onChange(inputValue);
  };

  return (
    <View className="my-2 w-full max-w-sm justify-center align-middle px-8">
      <Text
        nativeID="formLabel"
        className="font-medium w-full h-8 flex my-auto justify-center align-middle">
        {label}
      </Text>
      <TextInput
        className="border border-black bg-white rounded-lg h-12 w-full font-medium px-4"
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        autoCapitalize="none"
        accessible={true}
        accessibilityLabel={label}
        accessibilityLabelledBy="formLabel"
      />
    </View>
  );
};

export default TextInputField;
