import React, { useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import CreateAccountContext from './CreateAccountContext';


const Screen1: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { formState, updateFormState } = useContext(CreateAccountContext);
  
    const handleNext = () => {
      // Perform any necessary validation before navigating to the next screen
      navigation.navigate('Screen2');
    };
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={formState.username}
          onChangeText={(text) => updateFormState({ username: text })}
        />
        {/* Other form fields */}
        <Button title="Next" onPress={handleNext} />
      </View>
    );
  };
  
  export default Screen1;