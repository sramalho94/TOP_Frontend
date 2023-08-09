import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

type Props = {
  text?: string;
  bgColor?: string;
  updateForm?: (field: string, value: string | boolean) => void; // Make this optional
  onPress?: () => void; // Add custom onPress prop
  Btnwidth: string;
  Btnheight: string;
  textColor?: string;
  img?: any;
  textSize?: string;
  value?: boolean; // Make this optional
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
};

const CircleBtn = ({
  textColor,
  textSize,
  img,
  Btnwidth,
  Btnheight,
  text,
  bgColor,
  updateForm,
  onPress,
  value,
}: Props) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    if (updateForm && value !== undefined) {
      // Check if updateForm and value are provided
      updateForm('result', value);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        className={`${bgColor} border-2 border-black flex items-center rounded-full justify-center ${textColor} ${Btnheight} ${Btnwidth}`}>
        {img && !text ? (
          <Image
            className={`bg-contain ${Btnheight} ${Btnwidth} rounded-full`}
            source={img}
          />
        ) : null}
        {text && !img ? (
          <Text className={`text-center text-${textSize}`}>{text}</Text>
        ) : null}
        {img && text
          ? (
            <Image
              className={`bg-contain ${Btnheight} ${Btnwidth} rounded-full`}
              source={img}
            />
          ) && <Text className={`text-center text-${textSize}`}>{text}</Text>
          : null}
      </TouchableOpacity>
    </>
  );
};

export default CircleBtn;
