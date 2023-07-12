import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

interface TextInputFieldProps {
  label: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ label }) => {
  const [text, setText] = useState('');

  const handleChangeText = (inputText: string) => {
    setText(inputText);
  };

  return (
    <View>
      <Text className="font-bold my-2">{label}</Text>
      <TextInput
        className="border-2 border-black rounded-lg"
        onChangeText={handleChangeText}
        value={text}
      />
    </View>
  );
};

export default TextInputField;
