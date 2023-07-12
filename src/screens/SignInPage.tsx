import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import NoImage from "../../assets/blankimage.png"
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {}

export default function SignInPage(props: Props) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setForm((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  return (
    <SafeAreaView className="w-342 m-6">
      <ScrollView>
        <View className="">
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-342 h-349 m-4" source={NoImage}>
            </Image>
          </View>

          <View className="m-6">
            <View className="mb-6">
              <Text className="w-36 h-8 flex items-center justify-center text-black font-medium">
                Username
              </Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={username => setForm({ ...form, username })}
                placeholderTextColor="#6b7280"
                className="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700 border"
                value={form.username}
              />
            </View>

            <View className="mb-6">

              <Text className="w-36 h-8 flex items-center justify-center text-black font-medium">
                Password
              </Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholderTextColor="#6b7280"
                className="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700 border"
                secureTextEntry={!form.showPassword}
                value={form.password}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                className="absolute top-10 right-4"
                >
                <Icon className="text-gray-500" type="Ionicons" name={form.showPassword ? 'eye-off-outline' : 'eye-outline'} size={25} />
              </TouchableOpacity>

            </View>

            <View className="mb-5">
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                className="flex items-center justify-center rounded-md bg-white border border-black py-2 px-4"
              >
                <Text className="text-black font-semibold text-base">
                  Log In
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mb-5">
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                className="flex items-center justify-center rounded-md bg-white border border-black py-2 px-4"
              >
                <Text className="text-black font-semibold text-base">
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle link
              }}
            >
              <Text className="text-sm font-normal text-black text-center">
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
