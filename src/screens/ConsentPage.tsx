import React, {useState, useContext} from 'react';
// import {useFormContext} from "react-hook-form";
// import {useFormContext} from '../context/CreateAccountContext';
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
import {useAuth} from '../context/AuthContext';
import CreateAccountContext from '../context/CreateAccountContext';

interface CheckState {
  isOver18Checked: boolean;
  isConsentChecked: boolean;
  isReadAndAcceptChecked: boolean;
}

const ConsentPage: React.FC<{navigation: any}> = ({navigation}) => {
  const handlePrivacyPolicyPress = () => {
    const privacyPolicyUrl = 'https://www.privacypolicies.com/generic/';
    Linking.openURL(privacyPolicyUrl);
  };

  // comment for push
  const {onRegister} = useAuth();
  // const {formState, updateFormState} = useContext<any>(CreateAccountContext);
  // const {formState} = useFormContext();
  const {formState, resetFormState} = useContext(CreateAccountContext);
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
      alert('Please check all the boxes before agreeing.');
      return;
    }

    if (onRegister) {
      console.log('Double check of formState: ' + JSON.stringify(formState));
      onRegister(formState)
        .then((res: any) =>
          console.log('res from register!!: ' + JSON.stringify(res.data)),
        )
        .catch((error: any) => {
          console.log('Screen Register Err: ' + error);
        });
      resetFormState();
      navigation.navigate('ConsentFormThankYou');
      console.log('reset marathon' + JSON.stringify(formState));
    } else {
      console.log('onRegister is not a function or is undefined.');
    }
    // alert('Thank you for agreeing to the terms.');
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
      <SafeAreaView className="flex-1 h-screen w-screen">
        <TopNavBar
          textSize="xl"
          textValue="Consent Form"
          fontFamily=""
          haveProgress={false}
        />


        {/* Might need this one or the one below or both?*/}
        <View className={`flex-1 max-w-lg mx-auto mt-6 p-4 px-8`}>
          <Text className={`mb-4 text-auto leading-5 text-black font-light `}>
        
        
        {/* <View className={`flex-1 justify-center p-4  px-8`}> */}
        {/* <ScrollView> */}
          {/* <Text className={`flex-1 mb-4 text-auto leading-5 font-light -mt-[220px]`}> */}
            By checking the boxes below, you consent to our using the personal
            information we collect through your use of this app in the way we
            have described.
          </Text>
          <View className={`flex-row items-center text-center`}>
            <Text className="flex content-center leading-5 text-black font-light mb-10">
              For more information about how we use and share personal
              information, please see our{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handlePrivacyPolicyPress}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          {/* might need to comment out  */}
          {/* <Text className={` flex-1 mb-4 text-auto`}> */}
          <View className="shadow shadow-black ">
            <View className="border-gray-200 border-b-2 pb-3 mb-5"></View>
          </View>
          {/* <View className="flex-row justify-start">
            <Text className={`mb-7 text-auto`}>
              Any questions may also be sent to{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handleEmailPress}>
                leavecovidtracking-us@joinzoe.com.
              </Text>
            </Text>
          </View> */}
          {/* <View className="border-slate-200 border-b-2 mb-16 pb-4"></View> */}
          <View className="mt-10">
            <View className={`flex-row items-left mb-3`}>
              <CheckBox
                handleCheckChanges={() =>
                  handleCheckBoxChange('isOver18Checked')
                }
                isSelected={checkBoxStates.isOver18Checked}
                accessHint='If checked, you confirm that you are over 18 years old.'
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
                accessHint='If checked, you will consent processing of your personal data (including without limitation data I provide relating to my health) as set forth in this consent and in the Privacy Policy.'
              />
              <Text className={`text-sm ml-2`}>
                I consent to the processing of my personal data (including
                without limitation data I provide relating to my health) as set
                forth in this consent and in the{' '}
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
                accessHint="I have read and accept Zoe Global's Terms of Use and Privacy Policy"
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
          </View>
          {/* </ScrollView> */}
          <View className="flex-1 justify-end">
            <TouchableOpacity
              onPress={handleAgree}
              className={'bg-themeBlue px-8 py-[14] rounded-md'}>
              <Text
                className={`text-themeWhite text-base font-bold text-center`}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </SafeAreaView>
    </>
  );
};

export default ConsentPage;
