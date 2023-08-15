import {Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';

type Props = {
  text?: string;
  bgColor?: string;
  updateForm?: (field: string, value: string | boolean) => void;
  onPress?: () => void;
  Btnwidth: string;
  Btnheight: string;
  textColor?: string;
  img?: any;
  textSize?: string;
  value?: boolean;
  accessLabel: string;
  accessHint: string;
};

const DashButton = ({
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
  accessLabel,
  accessHint,
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
        className={`border-2 border-themeBlue ${bgColor}  flex items-center rounded-full justify-center ${textColor} ${Btnheight} ${Btnwidth} `}
        accessible={true}
        accessibilityLabel={accessLabel}
        accessibilityHint={accessHint}
        accessibilityRole="button">
        <View className="items-center relative">
          <View className="rounded-lg">
            <Image className="bg-contain w-18 h-18 z-10 mb-14" source={img} />
          </View>
          <Text
            className={`text-center ${textSize} ${textColor} absolute top-28`}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default DashButton;
