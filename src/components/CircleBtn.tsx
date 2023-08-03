import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {Image} from 'react-native';

type Props = {
  text?: string;
  bgColor?: string;
  updateForm: (field: string, value: string) => void;
  Btnwidth: string;
  Btnheight: string;
  textColor?: string;
  img?: any;
  textSize?: string;
  value:string;
};

// TODO:
// Refactor tenaries in Touchable opacity/ make sure they work

const CircleBtn = ({
  textColor,
  textSize,
  img,
  Btnwidth,
  Btnheight,
  text,
  bgColor,
  updateForm,
  value
}: Props) => {
  return (
    <>
      <TouchableOpacity
        onPress={()=>updateForm("result",value)}
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
