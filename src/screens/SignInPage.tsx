import React, { useState } from 'react';
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
import Button from '../components/Button';
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
    <SafeAreaView className="w-342 m-4">
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
                onChangeText={username => setForm({ ...form, username })}
                placeholderTextColor="#6b7280"
                className="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700 border"
                value={form.username}
              />
            </View>

            <Password setForm={setForm} form={form} />


          </View>
          <View className="mt-4">
            <Button
              onPress={() => console.log('pressed')}
              innerText="Login"
              textColor=""
              bgColor=""
              border={true}
              borderColor="border border-black"
            />
            <Button
              onPress={() => console.log('pressed')}
              innerText="Forgot Password"
              textColor=""
              bgColor=""
              border={true}
              borderColor="border border-black"
            />
            <Button
              onPress={() => console.log('Skip button pressed')}
              innerText="Skip"
              bgColor=""
              textColor=""
              border={false}
              borderColor=""
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
