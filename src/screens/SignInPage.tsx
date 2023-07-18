import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import NoImage from '../../assets/blankimage.png';
import Password from "../components/Password"

type Props = {};

type FormState = {
  username: string;
  password: string;
  showPassword: boolean;
};

const initialFormState: FormState = {
  username: '',
  password: '',
  showPassword: false,
};

export default function SignInPage(props: Props) {
  const [form, setForm] = useState<FormState>(initialFormState);

  return (
    <SafeAreaView className="w-342 m-6">
      <ScrollView>
        <View className="">
          <View className="flex flex-row justify-center align-middle">
            <Image className="w-342 h-349 m-4" source={NoImage}></Image>
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
                onChangeText={username => setForm({...form, username})}
                placeholderTextColor="#6b7280"
                className="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700 border"
                value={form.username}
              />
            </View>

            <Password setForm={setForm} form={form} />

            <View className="mb-5">
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                className="flex items-center justify-center rounded-md bg-white border border-black py-2 px-4">
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
                className="flex items-center justify-center rounded-md bg-white border border-black py-2 px-4">
                <Text className="text-black font-semibold text-base">
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle link
              }}>
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
