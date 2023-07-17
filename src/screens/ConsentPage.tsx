import React from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';

const ConsentPage = () => {
  const handlePrivacyPolicyPress = () => {
    const privacyPolicyUrl = 'https://www.privacypolicies.com/generic/';
    Linking.openURL(privacyPolicyUrl);
  };
  const handleEmailPress = () => {
    const email = 'leavecovidtracking-us@joinzoe.com';
    Linking.openURL(`mailto:${email}`);
  };
  const handleTermsPress = () => {
    const termsUrl = 'https://www.termsfeed.com/blog/sample-terms-of-use-template/';
    Linking.openURL(termsUrl);
  };
  const handleAgree = () => {
    alert('You have agreed to the terms.');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className={`flex-1 justify-center bg-white p-4 px-8`}>
          <Text className={`text-xl font-bold text-black mb-4 text-center`}>User Consent</Text>
          <Text className={`mb-4 text-center`}>
            By checking the boxes below, you consent to our using the personal information we collect through your use of this app in the way we have described.
          </Text>
          <Text className={`mb-4 text-center`}>
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
          <Text className={`mb-4`}>
            Any questions may also be sent to{' '}
            <TouchableOpacity onPress={handleEmailPress}>
              <Text className={`text-blue-500 underline`}>covidtracking-us@joinzoe.com</Text>
            </TouchableOpacity>
            {'.'}
          </Text>
          <View className={`flex-row items-left mb-4`}>
            <View className={`w-4 h-4 bg-gray-400 mr-2`} />
            <Text className={`text-xs`}>
              I confirm that I'm over 18 years old.
            </Text>
          </View>
          <View className={`flex-row items-center mb-4`}>
            <View className={`w-4 h-4 bg-gray-400 mr-2`} />
            <Text className={`text-xs`}>
              I consent to the processing of my personal data (including without limitation data I provide relating to my health) as set forth in this consent and in the{' '}
              <TouchableOpacity onPress={handlePrivacyPolicyPress}>
                <Text className={`text-blue-500 underline`}>Privacy Policy</Text>
              </TouchableOpacity>
              {'.'}
            </Text>
          </View>
          <View className={`flex-row items-center mb-4`}>
            <View className={`w-4 h-4 bg-gray-400 mr-2`} />
            <Text className={`text-xs`}>
              I have read and accept{' '}
              <TouchableOpacity onPress={handleTermsPress}>
                <Text className={`text-blue-500 underline`}>Zoe Global's Terms of Use</Text>
              </TouchableOpacity>
              {' '}
              and{' '}
              <TouchableOpacity onPress={handlePrivacyPolicyPress}>
                <Text className={`text-blue-500 underline`}>Privacy Policy</Text>
              </TouchableOpacity>
              {'.'}
            </Text>
          </View>
          <TouchableOpacity onPress={handleAgree} className={`bg-black px-8 py-2.5 rounded-md`}>
            <Text className={`text-white text-base font-bold text-center`}>I Agree to These Terms</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsentPage;
