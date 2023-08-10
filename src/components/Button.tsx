import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

type Props = {
  onPress: () => void;
  innerText: string;
  bgColor: string;
  textColor: string;
  border: boolean;
  borderColor?: string;
  textDecoration?: string;
  width?: string;
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
      className={`w-${width} max-w-sm mx-auto align-center px-4 items-center`}>
      <TouchableOpacity
        className={`${border ? `${borderColor}` : ''}
         flex justify-center align-center items-center w-full h-[52] rounded-lg mb-3 ${bgColor}`}
        onPress={onPress}>
        <Text
          className={`text-base font-bold ${textColor} ${
            textDecoration ? `${textDecoration}` : ''
          }`}>
          {innerText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
