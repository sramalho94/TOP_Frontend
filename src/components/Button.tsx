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
    <View className={`max-h-36  flex-row justify-center mx-auto w-${width}`}>
      <TouchableOpacity
        className={`${border ? `${borderColor}` : ''}
         flex justify-center items-center w-full max-w-sm h-[52] rounded-lg mb-3 ${bgColor}`}
        onPress={onPress}>
        <Text
          className={`text-base font-semibold ${textColor} ${
            textDecoration ? `${textDecoration}` : ''
          }`}>
          {innerText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
