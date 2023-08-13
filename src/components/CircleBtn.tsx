import {Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import Button from './Button';

type Props = {
  text?: string;
  bgColor?: string;
  borderColor: string;
  updateForm?: (field: string, value: string | boolean) => void; // Make this optional
  onPress?: () => void; // Add custom onPress prop
  Btnwidth: string;
  Btnheight: string;
  textColor?: string;
  img?: any;
  textSize?: string;
  value?: boolean; // Make this optional
  accessLabel: string;
  accessHint: string;
  imgWidth?: string;
  imgHeight?: string;
};

const CircleBtn = ({
  textColor,
  borderColor,
  textSize,
  img,
  Btnwidth,
  Btnheight,
  text,
  bgColor,
  updateForm,
  onPress,
  value,
  accessLabel,
  accessHint,
  imgWidth,
  imgHeight,
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
        className={`${bgColor} border-2 ${borderColor} flex items-center rounded-full justify-center ${textColor} ${Btnheight} ${Btnwidth}`}
        accessible={true}
        accessibilityLabel={accessLabel}
        accessibilityHint={accessHint}
        accessibilityRole="button">
        {img && !text ? (
          <Image
            className={`bg-contain ${Btnheight} ${Btnwidth} rounded-full`}
            source={img}
          />
        ) : null}
        {text && !img ? (
          <Text className={`text-center ${textSize}`}>{text}</Text>
        ) : null}
        {img && text ? (
          <View className="items-center gap-2">
            <Text className={`text-center ${textSize} ${textColor}`}>
              {text}
            </Text>
            <View className={` rounded-lg`}>
              <Image
                className={`bg-contain ${imgWidth} ${imgHeight}`}
                source={img}
              />
            </View>
          </View>
        ) : null}
      </TouchableOpacity>
    </>
  );
};

export default CircleBtn;
