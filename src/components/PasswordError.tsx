import React, {View, Text} from 'react-native';

const PasswordError = () => {
  return (
    <View className="my-4 w-80 mx-auto">
      <View className=" justify-center items-center ">
        <View className="bg-red-100 p-5 rounded-lg border-2 border-red-500">
          <Text className="text-15 font-bold mb-4 text-red-500">
            Error! Password must include:
          </Text>
          <Text className="mb-2 ml-2">at least one uppercase letter (A-Z)</Text>
          <Text className="mb-2 ml-2">at least one lowercase letter (a-z)</Text>
          <Text className="mb-2 ml-2">at least one number (0-9)</Text>
          <Text className="mb-2 ml-2">
            at least one special character (!@#$)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PasswordError;
