import {View} from 'react-native';
import React, {useEffect} from 'react';

type Props = {
  page: number;
};

const ProgressDots = ({page}: Props) => {
  useEffect(() => {}, [page]);

  return (
    <>
      <View
        className="flex-row justify-center"
        accessibilityLabel="Progress Markers"
        accessibilityHint="Shows progress through pages on swipe or button press">
        <View
          className={`rounded-lg ${
            page === 1 ? 'bg-themeBlue' : 'bg-themeLightBlue'
          } w-3 h-3 m-1`}
          accessibilityLabel="Progress Marker 1"
        />
        <View
          className={`rounded-lg ${
            page === 2 ? 'bg-themeBlue' : 'bg-themeLightBlue'
          } w-3 h-3 m-1`}
        />
        <View
          className={`rounded-lg ${
            page === 3 ? 'bg-themeBlue' : 'bg-themeLightBlue'
          } w-3 h-3 m-1`}
        />
      </View>
    </>
  );
};

export default ProgressDots;
