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

const ConsentPage: React.FC<{navigation: any}> = ({navigation}) => {
  const handlePrivacyPolicyPress = () => {
    const privacyPolicyUrl = 'https://www.privacypolicies.com/generic/';
    Linking.openURL(privacyPolicyUrl);
  };

  const resetFormState = () => {
    setFormState({
      username: '',
      email: '',
      password: '',
      DOB: '',
      ZIP: '',
      gender: '',
      race: '',
      ethnicity: '',
      state: '',
      firstName: '',
    });
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
        resetFormState({
          username: '',
          email: '',
          password: '',
          DOB: '',
          ZIP: '',
          gender: '',
          race: '',
          ethnicity: '',
          state: '',
          firstName: '',
        });
        console.log('it reset!' + JSON.stringify(formState));
      navigation.navigate('ThankYouScreen');
    } else {
      console.log('onRegister is not a function or is undefined.');
    }
    // alert('Thank you for agreeing to the terms.');
  };

  const [checkBoxStates, setCheckBoxStates] = useState({
    isOver18Checked: false,
    isConsentChecked: false,
    isReadAndAcceptChecked: false,
  });

  const handleCheckBoxChange = checkboxName => {
    setCheckBoxStates(prevState => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
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
        <View className={`flex justify-center p-4 px-8 flex-1`}>
          <Text className={`text-xl font-bold text-black mb-5 text-center`}>
            User Consent
          </Text>
          <Text className={`mb-4 text-auto`}>
            By checking the boxes below, you consent to our using the personal
            information we collect through your use of this app in the way we
            have described.
          </Text>
          <View className={`flex-row items-center`}>
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
            <Text className={`mb-7 text-auto`}>
              Any questions may also be sent to{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handleEmailPress}>
                covidtracking-us@joinzoe.com.
              </Text>
            </Text>
          </View>
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
