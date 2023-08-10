import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';

type Props = {
  page: number;
};

const ProgressDots = ({page}: Props) => {
  // TODO: make it more dynamic! Probably need to use map? Not necessary for this project, but good if we end up having more than three dots in the future

  useEffect(() => {}, [page]);

  return (
    <>
      <View className="flex-row justify-center" accessibilityLabel="Progress Markers" accessibilityHint="Shows progress through pages on swipe or button press">
        <View
          className={`rounded-lg ${
            page === 1 ? 'bg-themeBlue' : 'bg-themeLightBlue'
          } w-3 h-3 m-1`}
          accessibilityLabel="Progress Marker 1"
          ></View>
        <View
          className={`rounded-lg ${
            page === 2 ? 'bg-themeBlue' : 'bg-themeLightBlue'
          } w-3 h-3 m-1`}
          ></View>
        <View
          className={`rounded-lg ${
            page === 3 ? 'bg-themeBlue' : 'bg-themeLightBlue'
          } w-3 h-3 m-1`}></View>
      </View>
    </>
  );
};

export default ProgressDots;
