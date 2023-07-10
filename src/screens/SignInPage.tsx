import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const INPUT_OFFSET = 110;

const SignInPage: React.FC = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 bg-blueGray-300">
        <View className="p-6 flex-1">
          <View className="my-9">
            <View className="self-center w-20 h-20 mb-9 bg-white rounded-3xl flex items-center justify-center">
              <FeatherIcon color="#075eec" name="lock" size={44} />
            </View>

            <Text className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Welcome to <Text className="text-blue-500">the Sign In Page</Text>
            </Text>

            <Text className="text-base font-medium text-gray-600 text-center">
              Keeping America Covid Free!
            </Text>
          </View>

          <View className="mb-6 flex-1">
            <View className="mb-6">
              <Text className="absolute w-36 h-11 flex items-center justify-center text-gray-400 font-medium">
                Email address
              </Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={{
                  height: 44,
                  backgroundColor: '#fff',
                  paddingLeft: INPUT_OFFSET,
                  paddingRight: 6,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#222',
                }}
                value={form.email}
              />
            </View>

            <View className="mb-6">
              <Text className="absolute w-36 h-11 flex items-center justify-center text-gray-400 font-medium">
                Password
              </Text>

              <TextInput
                autoCorrect={false}
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={{
                  height: 44,
                  backgroundColor: '#fff',
                  paddingLeft: INPUT_OFFSET,
                  paddingRight: 6,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#222',
                }}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View className="mb-10 flex items-center">
              <TouchableOpacity
                onPress={() => {
                }}
                className="flex items-center justify-center rounded-md bg-black border border-black py-2 px-4"
              >
                <Text className="text-white font-semibold text-base">
                  Sign in
                </Text>
              </TouchableOpacity>

              <View className="flex-1" />

              <TouchableOpacity
                onPress={() => {
                }}
                className="flex items-center justify-center rounded-md border border-black py-2 px-4"
              >
                <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 2 }}
                />

                <Text className="text-base font-semibold text-black">
                  Face ID
                </Text>

                <View style={{ width: 9 }} />
              </TouchableOpacity>
            </View>

            <Text className="text-sm font-normal text-gray-600 text-center">
              By clicking "Sign in" above, you agree to Team 3's{' '}
              <Text className="font-semibold">Terms & Conditions</Text> and{' '}
              <Text className="font-semibold">Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInPage;
