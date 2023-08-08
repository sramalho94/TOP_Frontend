import React from 'react';
import { View, Text, TextInput } from 'react-native';

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
    <View className="my-4">
      <Text className="font-medium ml-3 w-36 h-8 flex my-auto justify-center">{label}</Text>
      <TextInput
        className="border border-black rounded-lg px-4 h-12 w-80 mx-auto font-medium"
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        autoCapitalize="none"
      />
    </View>
  );
};

export default TextInputField;