import {View, Text} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View
      accessibilityLabel="Loading Page"
      accessibilityHint="Screen while destination page is loading"
      accessibilityRole="header">
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;
