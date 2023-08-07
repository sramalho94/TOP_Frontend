import React, { View, Text } from 'react-native';

type Props = {

};

const PasswordError = (props: Props) => {


  return (
    <View className="my-4">
        <View className="flex-1 justify-center items-center bg-opacity-50">
            <View className="bg-white p-8 rounded-lg w-72 border-4">
                <Text className="text-xl font-bold mb-4">
                Your password must include:
                </Text>
                <Text className="mb-2">- At least 8 characters</Text>
                <Text className="mb-2">
                - One uppercase and one lowercase letter
                </Text>
                <Text className="mb-2">
                - One number and one special character
                </Text>
            </View>
        </View>
    </View>
  );
};

export default PasswordError;