import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import TopNavBar from '../components/TopNavBar';

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
    const termsUrl =
      'https://www.termsfeed.com/blog/sample-terms-of-use-template/';
    Linking.openURL(termsUrl);
  };
  const handleAgree = () => {
    alert('You have agreed to the terms.');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* add topNavBar component here and pass a few props to it */}
        {/* Still need to double check the font size and family font! */}
        <TopNavBar
          textSize="xl"
          textValue="Consent Form"
          fontFamily=""
          haveProgress={false}
        />
        <View className={`flex justify-center bg-white p-4 px-8 flex-1`}>
          <Text className={`text-xl font-bold text-black mb-5 text-center`}>
            User Consent
          </Text>
          <Text className={`mb-4 text-auto`}>
            By checking the boxes below, you consent to our using the personal
            information we collect through your use of this app in the way we
            have described.
          </Text>
          <View className={`my-4 flex-row items-center`}>
            <Text className="flex content-center">
              For more information about how we use and share personal
              information, please see our{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handlePrivacyPolicyPress}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          <Text className={`mb-4 text-auto`}>
            You may withdraw your consent at any time by emailing{' '}
            <Text
              className={`text-blue-500 underline`}
              onPress={handleEmailPress}>
              leavecovidtracking-us@joinzoe.com.
            </Text>
          </Text>
          <View className="flex-row justify-start">
            <Text className={`mb-4 text-auto`}>
              Any questions may also be sent to{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handleEmailPress}>
                covidtracking-us@joinzoe.com.
              </Text>
            </Text>
          </View>
          <View className={`flex-row items-left mb-4`}>
            <View className={`w-4 h-4 bg-gray-400 mr-2`} />
            <Text className={`text-sm`}>
              I confirm that I'm over 18 years old.
            </Text>
          </View>
          <View className={`flex-row items-center mb-4`}>
            <View className={`w-4 h-4 bg-gray-400 mr-2`} />
            <Text className={`text-sm`}>
              I consent to the processing of my personal data (including without
              limitation data I provide relating to my health) as set forth in
              this consent and in the{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handlePrivacyPolicyPress}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          <View className={`flex-row items-center mb-4`}>
            <View className={`w-4 h-4 bg-gray-400 mr-2`} />
            <Text className={`text-sm`}>
              I have read and accept{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handleTermsPress}>
                Zoe Global's Terms of Use
              </Text>{' '}
              and{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handlePrivacyPolicyPress}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleAgree}
            className={`bg-black px-8 py-2.5 rounded-md mt-6`}>
            <Text className={`text-white text-base font-bold text-center`}>
              I Agree to These Terms
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsentPage;
