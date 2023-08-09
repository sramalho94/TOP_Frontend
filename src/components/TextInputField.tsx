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
    <View className="my-4 w-full max-w-sm flex-1 justify-center align-middle px-4">
      <Text className="font-medium w-full h-8 flex my-auto justify-center align-middle">{label}</Text>
      <TextInput
        className="border border-black rounded-lg h-12 w-full font-medium px-4 bg-red-600"
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        autoCapitalize="none"
      />
    </View>
  );
};

export default TextInputField;