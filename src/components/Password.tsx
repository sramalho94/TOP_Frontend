import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  // setForm: React.Dispatch<React.SetStateAction<FormState>>;
  // form: FormState;
  onChange: (field: string, value: string) => void;
  password:string;
};

const PasswordField = (props: Props) => {
  // const { setForm, form } = props;

  // const handlePasswordChange = (password: string) => {
  //   props.onChange('password', value);
  // };

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  };

  return (
    <View className="my-4">
      <Text className="ml-3 w-36 h-8 flex my-auto justify-center font-medium">
        Password
      </Text>

      <TextInput
        autoCorrect={false}
        onChangeText={value => props.onChange('password', value)}
        placeholder="Enter your password"
        placeholderTextColor="#6b7280"
        className="border border-black rounded-lg px-4 h-12 w-80 mx-auto font-medium"
        secureTextEntry={!showPassword}
        value={props.password}
      />

      <TouchableOpacity
        onPress={togglePasswordVisibility}
        className="absolute top-10 right-6">
        <Icon
          className="text-gray-500"
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordField;
