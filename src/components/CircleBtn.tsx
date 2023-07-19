import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';

type Props = {
  text: string;
  bgColor: string;
  onPress: () => void;
};

// Can use on report page screens and homescreen

const CircleBtn = ({text, bgColor, onPress}: Props) => {
  // useEffect(() => {}, [page]);

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        className={`${bgColor} mx-3 border-2 border-black flex items-center w-[125] h-[125] rounded-full justify-center`}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default CircleBtn;
