import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import { Image } from 'react-native';

type Props = {
  text?: string;
  bgColor?: string;
  onPress: () => void;
  Btnsize: string;
  textColor?: string;
  img?: string;
  textSize?: string,
};

    // TODO: 

    // Need to research a way to make the view/touchable opacity etc. a bg image with text on top capabilities ?
        // style={{
        //   backgroundImage: "require(/assets/orange-flower.png)",
        //   height: "300px",
        //   width: "200px",
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        // }}

    // Margin for Touchable opacity removed- conflicting with spacing on other screens - make sure to add margins to circles in views that it is imported

const CircleBtn = ({text, bgColor, onPress, Btnsize, textColor, img, textSize }: Props)=> {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        className={`${bgColor} border-2 border-black flex items-center rounded-full justify-center ${textColor} h-[${Btnsize}] w-[${Btnsize}]`}>
         {img ?  <Image className={`bg-contain w-[${Btnsize}] h-[${Btnsize}] rounded-full`} source={img} />: <Text className={`text-center text-${textSize} text-black`} >{text}</Text>}
      </TouchableOpacity>
    </>
  );
};

export default CircleBtn;

