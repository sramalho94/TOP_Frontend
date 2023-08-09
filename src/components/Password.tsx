import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  // setForm: React.Dispatch<React.SetStateAction<FormState>>;
  // form: FormState;
  onChange: (text: string) => void;
  password: string;
};

const PasswordField = (props: Props) => {
  // const { setForm, form } = props;

  // const handlePasswordChange = (password: string) => {
  //   props.onChange('password', value);
  // };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="w-full max-w-sm flex-1 justify-center align-middle px-8">
      <Text className="font-medium w-full h-8 flex my-auto justify-center align-middle">
        Password*
      </Text>

      {/* TODO: NEED TO TEST */}
      <TextInput
        autoCorrect={false}
        value={props.password}
        onChangeText={value => props.onChange(value)}
        placeholder="Password"
        placeholderTextColor="#6b7280"
        className="border border-black rounded-lg px-4 h-12 w-full mx-auto font-medium"
        secureTextEntry={!showPassword}
      />

      <TouchableOpacity
        onPress={togglePasswordVisibility}
        className="absolute top-10 right-10">
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
