import React from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ConsentPage = () => {
  const handlePrivacyPolicyPress = () => {
    const privacyPolicyUrl = 'https://google.com';
    Linking.openURL(privacyPolicyUrl);
  };
  const handleEmailPress = () => {
    const email = 'leavecovidtracking-us@joinzoe.com';
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className={`flex-1 justify-center items-center bg-white p-4`}>
          <Text className={`text-l font-bold text-black mb-4`}>User Consent</Text>
          <Text className={`mb-4`}>
            By checking the boxes below, you consent to our using the personal information we collect through your use of this app in the way we have described.
          </Text>
          <Text className={`mb-4`}>
            For more information about how we use and share personal information, please see our{' '}
            <TouchableOpacity onPress={handlePrivacyPolicyPress}>
              <Text className={`text-blue-500 underline`}>Privacy Policy</Text>
            </TouchableOpacity>
            {'.'}
          </Text>
          <Text className={`mb-4`}>
            You may withdraw your consent at any time by emailing{' '}
            <TouchableOpacity onPress={handleEmailPress}>
              <Text className={`text-blue-500 underline`}>leavecovidtracking-us@joinzoe.com</Text>
            </TouchableOpacity>
            {'.'}
          </Text>
          <Text>
            Any questions may also be sent to{' '}
            <TouchableOpacity onPress={handleEmailPress}>
              <Text className={`text-blue-500 underline`}>covidtracking-us@joinzoe.com</Text>
            </TouchableOpacity>
            {'.'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsentPage;
