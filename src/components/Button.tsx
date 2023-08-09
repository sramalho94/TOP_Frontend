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
      className={`w-${width} max-w-sm flex-1 justify-center align-center px-8 max-h-20 items-center mb-2`}>
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
