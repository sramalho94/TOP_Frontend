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

// Can use on report page screens and homescreen

    // TODO: need to consider: do we need to add a size property for circle btn component?
        // xsmall: w-[72] h[72]
        // small: w-[104] h-[104]
        // medium: w-[125] h-[125] 
        // large: w-[182] h-[182]
        // text color
        // src property for image buttons??? probs

    // Need to research a way to make the view/touchable opacity etc. a bg image with text on top capabilities ?
        // style={{
        //   backgroundImage: "require(/assets/orange-flower.png)",
        //   height: "300px",
        //   width: "200px",
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        // }}

        // Margin for Touchable opacity removed- conflicting with spacing on other screens - make sure to add margins to circles in views that it is imported

    // Going to need to create a prop for text sizing within the circleBtn component

const CircleBtn = ({textColor, textSize, img, Btnsize, text, bgColor, onPress}: Props)=> {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        className={`${bgColor} border-2 border-black flex items-center rounded-full justify-center ${textColor} h-[${Btnsize}] w-[${Btnsize}]`}>
         {img ?  <Image className={`bg-contain w-[${Btnsize}] h-[${Btnsize}] rounded-full`} source={img} />: <Text className={`text-center text-${textSize}`} >{text}</Text>}
      </TouchableOpacity>
    </>
  );
};

export default CircleBtn;