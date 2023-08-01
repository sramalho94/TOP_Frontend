import {View, Text, TextInput, TouchableOpacity} from 'react-native';
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
  handleChange: (field: string, value: string) => void;
};

const PasswordField = (props: Props) => {
  const {setForm, form, handleChange} = props;

  const handlePasswordChange = (password: string) => {
    setForm(prevState => ({...prevState, password}));
    handleChange('password', password);
  };

  const togglePasswordVisibility = () => {
    setForm(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  return (
    <View className="my-4">
      <Text className="ml-3 w-36 h-8 flex my-auto justify-center font-medium">
        Password
      </Text>

      <TextInput
        autoCorrect={false}
        onChangeText={handlePasswordChange}
        placeholder="Enter your password"
        placeholderTextColor="#6b7280"
        className="border border-black rounded-lg px-4 h-12 w-80 mx-auto font-medium"
        secureTextEntry={!form.showPassword}
        value={form.password}
      />

      <TouchableOpacity
        onPress={togglePasswordVisibility}
        className="absolute top-10 right-6">
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
