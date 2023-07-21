import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import { Image } from 'react-native';

type Props = {
  text?: string;
  bgColor?: string;
  onPress: () => void;
  Btnsize: number;
  textColor?: string;
  img?: string;
  textSize?: string,
};

// TODO: 
// Refactor tenaries in Touchable opacity/ make sure they work


const CircleBtn = ({textColor, textSize, img, Btnsize, text, bgColor, onPress}: Props)=> {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        className={`${bgColor} border-2 border-black flex items-center rounded-full justify-center ${textColor} h-[${Btnsize}] w-[${Btnsize}]`}>
         {img && !text ?  <Image className={`border-2 border-black bg-contain w-[${Btnsize}] h-[${Btnsize}] rounded-full`} source={img} />: null }
         {text && !img ? <Text className={`text-center text-${textSize}`} >{text}</Text> : null }
         {img && text ? <Image className={`border-2 border-black bg-contain w-[${Btnsize}] h-[${Btnsize}] rounded-full`} source={img} /> && <Text className={`text-center text-${textSize}`} >{text}</Text> : null }
      </TouchableOpacity>
    </>
  );
};

export default CircleBtn;

