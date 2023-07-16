import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

<View className="mb-6">
  <Text className="w-36 h-8 flex items-center justify-center text-black font-medium">
    Password
  </Text>

  <TextInput
    autoCorrect={false}
    onChangeText={password => setForm({...form, password})}
    placeholder="Enter your password"
    placeholderTextColor="#6b7280"
    className="h-11 bg-white pl-8 pr-6 rounded-lg text-base font-medium text-gray-700 border"
    secureTextEntry={!form.showPassword}
    value={form.password}
  />

  <TouchableOpacity
    onPress={togglePasswordVisibility}
    className="absolute top-3 right-4">
    <Icon
      className="text-gray-500"
      type="Ionicons"
      name={form.showPassword ? 'eye-off-outline' : 'eye-outline'}
      size={25}
    />
  </TouchableOpacity>
</View>
