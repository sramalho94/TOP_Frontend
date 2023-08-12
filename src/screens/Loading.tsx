import {View, Text} from 'react-native';
import React from 'react';

type Props = {};

const Loading = (props: Props) => {
  return (
    <View accessibilityLabel='Loading Page' accessibilityHint='Screen while destination page is loading' accessibilityRole='header'>
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;
