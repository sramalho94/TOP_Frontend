import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface CheckBoxProps {
  handleCheckChanges: () => void;
  isSelected: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  handleCheckChanges,
  isSelected,
}) => {
  console.log('Props in CheckBox: ', {handleCheckChanges, isSelected});

  return (
    <TouchableOpacity onPress={handleCheckChanges}>
      {!isSelected ? (
        <Icon name="square-outline" size={30} color="#900" />
      ) : (
        <Icon name="checkbox-outline" size={30} color="#900" />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
