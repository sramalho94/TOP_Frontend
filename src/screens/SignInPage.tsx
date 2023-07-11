import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';View
import NoImage from "../../assets/blankimage.png"


export default function SignInPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView className="w-342 m-6">
      <ScrollView>
        <View className="">
          <View className="flex flex-row justify-center align-middle">
            <Image className="bg-green-500 w-342 h-349 m-4" source={NoImage}>
            </Image>
          </View>

          <View className="m-6">
            <View className="m-6 bg-red-500">
              <Text className="w-36 h-11 flex items-center justify-center text-black font-medium">
                Username
              </Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                className="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700 border"
                value={form.email}
              />
            </View>

            <View className="mb-6 bg-red-500">
              <Text className="w-36 h-11 flex items-center justify-center text-black font-medium">
                Password
              </Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                className="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700 border"
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View className="mb-10">
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                className="flex items-center justify-center rounded-md bg-black border border-black py-2 px-4"
              >
                <Text className="text-white font-semibold text-base">
                  Log In
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle link
              }}
            >
              <Text className="flex items-center justify-center rounded-md bg-black border border-black py-2 px-4">
                Don't have an account?{' '}
                <Text className="font-semibold text-white">Sign up</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle link
              }}
            >
              <Text className="text-sm font-normal text-gray-600 text-center">
                Forgot Password?{' '}
                <Text className="font-semibold underline">Reset Password</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
