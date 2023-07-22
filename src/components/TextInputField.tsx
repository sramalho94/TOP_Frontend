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
    <View className="mx-6">
      <Text className="font-bold my-2">{label}</Text>
      <TextInput
        className="border border-black rounded-lg px-4 h-12"
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputField;