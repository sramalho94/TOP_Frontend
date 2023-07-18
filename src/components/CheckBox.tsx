import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
type Props = {};

const CheckBox = (props: Props) => {
  return (
    <View>
      <Icon name="square-outline" size={30} color="#900" />
      <Icon name="checkbox-outline" size={30} color="#900" />
    </View>
  );
};

export default CheckBox;
