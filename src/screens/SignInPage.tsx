import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Example() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style="flex-1 bg-white">
      <View style="p-6 flex-1">
        <View style="my-9">
          <Text style="text-2xl font-bold text-gray-900 mb-2 text-center">
            Welcome back!
          </Text>

          <Text style="text-base font-medium text-gray-600 text-center">
            Sign in to your account
          </Text>
        </View>

        <View style="mb-6">
          <View style="mb-6">
            <Text style="absolute w-36 h-11 flex items-center justify-center text-black font-medium">
              Email address
            </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700"
              value={form.email}
            />
          </View>

          <View style="mb-6">
            <Text style="absolute w-36 h-11 flex items-center justify-center text-gray-400 font-medium">
              Password
            </Text>

            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700"
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style="mb-10">
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style="flex items-center justify-center rounded-md bg-black border border-black py-2 px-4"
            >
              <Text style="text-white font-semibold text-base">
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle link
            }}
          >
            <Text style="text-sm font-normal text-gray-600 text-center">
              Don't have an account?{' '}
              <Text style="font-semibold underline">Sign up</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle link
            }}
          >
            <Text style="text-sm font-normal text-gray-600 text-center">
              Forgot Password?{' '}
              <Text style="font-semibold underline">Reset Password</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
