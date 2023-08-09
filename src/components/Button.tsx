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
  access: boolean;
  accessLabel: string;
  accessHint: string;


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
  access,
  accessLabel,
  accessHint,
}: Props) => {
  return (
    <View
      className={`w-${width} max-w-sm justify-center align-center px-8 items-center bg-blue-400`}>
      <TouchableOpacity
        className={`${border ? `${borderColor}` : ''}
         flex justify-center items-center w-full max-w-sm h-[52] rounded-lg mb-3 ${bgColor}`}
        onPress={onPress}
        accessible={access}
        accessibilityLabel={accessLabel}
        accessibilityHint={accessHint}
        accessibilityRole='button'
        >
        <Text
          className={`text-base font-semibold ${textColor} ${textDecoration ? `${textDecoration}` : ''
            }`}>
          {innerText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
