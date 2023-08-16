import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import ProgressDots from './ProgressDots';
import {useNavigation} from '@react-navigation/native';

type Props = {
  textSize: string;
  textValue: string;
  fontFamily: string;
  haveProgress: boolean;
  page?: number;
};

const TopNavBar = ({
  textSize,
  textValue,
  fontFamily,
  haveProgress,
  page,
}: Props) => {
  const navigation = useNavigation();
  const handleBackNavigation = () => {
    navigation.goBack();
  };

  return (
    <View className="h-1/8 mb-1">
      <View className="flex-row mt-6 mb-2">
        <TouchableOpacity
          className="mt-2 ml-4"
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Back"
          accessibilityHint="Navigates to the previous screen">
          <Icon name="arrowleft" size={30} color="#000" className="" />
        </TouchableOpacity>
        <Text
          className={`text-${textSize}  text-themeBlue font-bold mx-auto mt-2 pr-12 font-${fontFamily}`}>
          {textValue}
        </Text>
      </View>
      <View className="shadow shadow-black ">
        <View className="border-gray-200 border-b-2  pb-4"></View>
      </View>
    </View>
  );
};

export default TopNavBar;
