import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import { Image } from 'react-native';

type Props = {
  text?: string;
  bgColor?: string;
  onPress: () => void;
  Btnwidth: string;
  Btnheight: string;
  textColor?: string;
  img?: any;
  textSize?: string,
};

// TODO: 
// Refactor tenaries in Touchable opacity/ make sure they work


const CircleBtn = ({textColor, textSize, img, Btnwidth, Btnheight, text, bgColor, onPress}: Props)=> {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        className={`${bgColor} border-2 border-black flex items-center rounded-full justify-center ${textColor} ${Btnheight} ${Btnwidth}`}>
         {img && !text ?  <Image className={`bg-contain ${Btnheight} ${Btnwidth} rounded-full`} source={img} />: null }
         {text && !img ? <Text className={`text-center text-${textSize}`} >{text}</Text> : null }
         {img && text ? <Image className={`bg-contain ${Btnheight} ${Btnwidth} rounded-full`} source={img} /> && <Text className={`text-center text-${textSize}`} >{text}</Text> : null }
      </TouchableOpacity>
    </>
  );
};

export default CircleBtn;

