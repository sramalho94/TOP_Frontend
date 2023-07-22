import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

type Props = {
  onPress: () => void;
  innerText: string;
  bgColor: string;
  textColor: string;
  border: boolean;
  borderColor?: string;
};

const Button = ({
  onPress,
  innerText,
  bgColor,
  border,
  borderColor,
  textColor,
}: Props) => {
  return (
    <View className="max-h-36 flex-row justify-center mx-4 ">
      <TouchableOpacity
        className={`${border ? `${borderColor}` : ''
          } flex justify-center items-center w-full max-w-sm h-[52] rounded-lg my-2 ${bgColor}`}
        onPress={onPress}>
        <Text className={`text-lg font-bold ${textColor}`}>{innerText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;