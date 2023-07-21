import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type FormState = {
  username: string;
  password: string;
  showPassword: boolean;
};

type Props = {
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  form: FormState;
};

const PasswordField = (props: Props) => {
  const { setForm, form } = props;

  const handlePasswordChange = (password: string) => {
    setForm(prevState => ({ ...prevState, password }));
  };

  const togglePasswordVisibility = () => {
    setForm(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  return (
    <View className="mb-6">
      <Text className="w-36 h-8 flex my-auto justify-center text-black font-medium">
        Password
      </Text>

      <TextInput
        autoCorrect={false}
        onChangeText={handlePasswordChange}
        placeholder="Enter your password"
        placeholderTextColor="#6b7280"
        className="h-12 bg-white pl-4 rounded-lg text-base font-medium text-gray-700 border border-black"
        secureTextEntry={!form.showPassword}
        value={form.password}
      />

      <TouchableOpacity
        onPress={togglePasswordVisibility}
        className="absolute top-10 right-4">
        <Icon
          className="text-gray-500"
          name={form.showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordField;
