import React from 'react';
import { View, Text, TextInput } from 'react-native';

// Define the props interface for TextInputField component
interface TextInputFieldProps {
  // Label for the input field
  label: string,
  // Current value of the input field
  value: string,
  // Function to handle input changes
  onChange: (value: string) => void;
}

// Define the TextInputField component
const TextInputField: React.FC<TextInputFieldProps> = ({ label, value, onChange }) => {
  // Function to handle input changes
  const handleChange = (inputValue: string) => {
    onChange(inputValue);
  };
  // Render the component
  return (
    <View>
      <Text className="font-bold my-2">{label}</Text>
      <TextInput
        className="border-2 border-black rounded-lg"
        value={value}
        onChangeText={handleChange}
        placeholder="Enter text"
      />
    </View>
  );
};

// Export the TextInputField component
export default TextInputField;
