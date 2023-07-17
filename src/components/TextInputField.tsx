import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface TextInputFieldProps {
  label: string,
  value: string,
  onChange: (value: string) => void;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ label, value, onChange }) => {
  const handleChange = (inputValue: string) => {
    onChange(inputValue);
  };

  return (
    <View className='my-2'>
      <Text className="font-bold my-2">{label}</Text>
      <TextInput
        className="border-2 border-black rounded-lg px-4"
        value={value}
        onChangeText={handleChange}
        placeholder="Enter text"
      />
    </View>
  );
};

export default TextInputField;
