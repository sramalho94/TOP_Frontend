import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

type Props = {
  onPress: () => void;
  innerText: string;
  bgColor: string;
  textColor: string;
  border: boolean;
  borderColor?: string;
  textDecoration?: string;
  width?: string;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;


};

const Button = ({
  onPress,
  innerText,
  bgColor,
  border,
  borderColor,
  textColor,
  textDecoration,
  width,
}: Props) => {
  return (
    <View
      className={`w-${width} max-w-sm justify-center align-center px-8 items-center bg-blue-400`}>
      <TouchableOpacity
        className={`${border ? `${borderColor}` : ''}
         flex justify-center align-center items-center w-full h-[52] rounded-lg mb-3 ${bgColor}`}
        onPress={onPress}>
        <Text
<<<<<<< HEAD
          className={`text-base font-bold ${textColor} ${
            textDecoration ? `${textDecoration}` : ''
          }`}>
=======
          className={`text-base font-semibold ${textColor} ${textDecoration ? `${textDecoration}` : ''
            }`}>
>>>>>>> 4a2d604ec6e58f1be6f5f5b3a9c7eff22675b49b
          {innerText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
