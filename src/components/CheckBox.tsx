import {TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface CheckBoxProps {
  handleCheckChanges: () => void;
  isSelected: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  handleCheckChanges,
  isSelected,
}) => {
  useEffect(() => {
    console.log('checkbox selection component: ', isSelected);
  }, [isSelected]);

  return (
    <TouchableOpacity onPress={handleCheckChanges}>
      {!isSelected ? (
        <Icon name="square-outline" size={22} color="#000000" />
      ) : (
        <Icon name="checkbox-outline" size={22} color="#000000" />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
