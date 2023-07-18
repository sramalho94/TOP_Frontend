import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
type CheckBoxProps = {
  handleCheckChanges: (value: boolean) => void;
  isSelected: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  handleCheckChanges,
  isSelected,
}) => {
  const handleChange = {(isSelected:Boolean)=>{handleCheckChanges(isSelected)}}
  return (
    <TouchableOpacity onPress={() => handleChange(isSelected)}>
      {!isSelected ? (
        <Icon name="square-outline" size={30} color="#900" />
      ) : (
        <Icon name="checkbox-outline" size={30} color="#900" />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
