import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import TopNavBar from '../components/TopNavBar';
import CheckBox from '../components/CheckBox';
import { useAuth } from '../context/AuthContext';
import CreateAccountContext from '../context/CreateAccountContext';

interface CheckState {
  isOver18Checked: boolean;
  isConsentChecked: boolean;
  isReadAndAcceptChecked: boolean;
}

const ConsentPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handlePrivacyPolicyPress = () => {
    const privacyPolicyUrl = 'https://www.privacypolicies.com/generic/';
    Linking.openURL(privacyPolicyUrl);
  };

  const { onRegister } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { formState, resetFormState } = useContext(CreateAccountContext);
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
    if (
      !checkBoxStates.isOver18Checked ||
      !checkBoxStates.isConsentChecked ||
      !checkBoxStates.isReadAndAcceptChecked
    ) {
      setErrorMessage('Please check all the boxes before agreeing.');
      return;
    }

    if (onRegister) {
      console.log('Double check of formState: ' + JSON.stringify(formState));
      onRegister(formState)
        .then((res: any) => {
        resetFormState();
        navigation.navigate('ConsentFormThankYou');
          console.log('res from register!!: ' + JSON.stringify(res.data))
        })
        .catch((error: any) => {
          console.log('Screen Register Err: ' + error);
        });
    } else {
      console.log('onRegister is not a function or is undefined.');
    }
  };

  const [checkBoxStates, setCheckBoxStates] = useState<CheckState>({
    isOver18Checked: false,
    isConsentChecked: false,
    isReadAndAcceptChecked: false,
  });

  const handleCheckBoxChange = (checkboxName: keyof CheckState) => {
    setCheckBoxStates(prevState => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };
  return (
    <>
      <SafeAreaView className="flex-1 h-screen w-screen bg-themeWhite">
        <TopNavBar
        textColor='text-themeBlue'
          textSize="xl"
          textValue="Create Account"
          fontFamily=""
          haveProgress={false}
        />

        {/* <ScrollView> */}
        {/* add topNavBar component here and pass a few props to it */}
        {/* Still need to double check the font size and family font! */}
        <View className={`flex-1 justify-center p-4 px-8`}>
          <Text className={`mb-4 text-auto leading-5 font-light -mt-[220px]`}>
            By checking the boxes below, you consent to our using the personal
            information we collect through your use of this app in the way we
            have described.
          </Text>
          <View className={`flex-row items-center text-center`}>
            <Text className="flex content-center leading-5 font-light mb-10">
              For more information about how we use and share personal
              information, please see our{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handlePrivacyPolicyPress}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          {/* <Text className={`mb-4 text-auto`}>
            You may withdraw your consent at any time by emailing{' '}
            <Text
              className={`text-blue-500 underline`}
              onPress={handleEmailPress}>
              leavecovidtracking-us@joinzoe.com.
            </Text>
          </Text> */}
          {/* <View className="flex-row justify-start">
            <Text className={`mb-7 text-auto`}>
              Any questions may also be sent to{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handleEmailPress}>
                covidtracking-us@joinzoe.com.
              </Text>
            </Text>
          </View> */}
          {/* <View className="border-slate-200 border-b-2 mb-16 pb-4"></View> */}
          <View className={`flex-row items-left mb-3`}>
            <CheckBox
              handleCheckChanges={() => handleCheckBoxChange('isOver18Checked')}
              isSelected={checkBoxStates.isOver18Checked}
            />
            <Text className={`text-sm ml-2`}>
              I confirm that I'm over 18 years old.
            </Text>
          </View>
          <View className={`flex-row items-center mb-4`}>
            <CheckBox
              handleCheckChanges={() =>
                handleCheckBoxChange('isConsentChecked')
              }
              isSelected={checkBoxStates.isConsentChecked}
            />
            <Text className={`text-sm ml-2`}>
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
            <CheckBox
              handleCheckChanges={() =>
                handleCheckBoxChange('isReadAndAcceptChecked')
              }
              isSelected={checkBoxStates.isReadAndAcceptChecked}
            />
            <Text className={`text-sm ml-2`}>
              I have read and accept{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handleTermsPress}>
                Terms of Use
              </Text>{' '}
              and{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handlePrivacyPolicyPress}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          {errorMessage ? (
            <View className="mt-0 p-2 bg-red-100 border border-red-500 mx-auto w-[315]">
              <Text className="text-red-500">{errorMessage}</Text>
            </View>
          ) : null}
          <TouchableOpacity
            onPress={handleAgree}
            className={`bg-black px-8 py-2.5 rounded-md mt-7`}>
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
