import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface CheckBoxProps {
  handleCheckChanges: () => void;
  isSelected: boolean;
  accessHint: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  handleCheckChanges,
  isSelected,
  accessHint,
}) => {
  return (
    <TouchableOpacity
      onPress={handleCheckChanges}
      accessible={true}
      accessibilityLabel="checkbox"
      accessibilityHint={accessHint}
      accessibilityRole="checkbox"
      aria-checked={isSelected}
      accessibilityState={{selected: isSelected}}>
      {!isSelected ? (
        <Icon name="square-outline" size={22} color="#000000" />
      ) : (
        <Icon name="checkbox-outline" size={22} color="#000000" />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
