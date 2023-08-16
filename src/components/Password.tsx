import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onChange: (text: string) => void;
  password: string;
};

const PasswordField = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="w-full max-w-sm my-4 flex-1 justify-center align-middle px-8">
      <Text
        nativeID="formLabel"
        className="font-medium w-full h-8 flex my-auto justify-center align-middle">
        Password*
      </Text>

      <TextInput
        autoCorrect={false}
        value={props.password}
        onChangeText={value => props.onChange(value)}
        placeholder="Password"
        className="border border-black rounded-lg px-4 h-12 w-full mx-auto font-medium"
        secureTextEntry={!showPassword}
        accessible={true}
        accessibilityLabel="Password"
        accessibilityLabelledBy="formLabel"
      />

      <TouchableOpacity
        onPress={togglePasswordVisibility}
        className="absolute top-11 right-10"
        accessible={true}
        accessibilityLabel="Show or Hide Password"
        accessibilityHint="This button toggles to show or hide your password"
        accessibilityRole="togglebutton"
        accessibilityState={{selected: showPassword}}>
        <Icon
          className="text-gray-500"
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordField;
