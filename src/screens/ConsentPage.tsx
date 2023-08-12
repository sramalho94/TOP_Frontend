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
import Button from '../components/Button';

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
      <SafeAreaView className="flex-1 min-w-screen min-h-screen bg-themeWhite">
        <TopNavBar
          textSize="xl"
          textValue="Consent Form"
          fontFamily=""
          haveProgress={false}
        />

        <ScrollView>

        <View className={`flex-1 max-w-lg mx-auto p-4 px-8`}>
          <Text className={`flex-1 mb-4 text-auto leading-5 font-light `}>
            By checking the boxes below, you consent to our using the personal
            information we collect through your use of this app in the way we
            have described.
          </Text>
          <View className={`flex-1 flex-row items-center text-center`}>
            <Text className="flex content-center leading-5 font-light mb-10">
              For more information about how we use and share personal
              information, please see our{' '}
              <Text
                className={`flex-1 text-blue-500 underline`}
                onPress={handlePrivacyPolicyPress}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
          {/* might need to comment out  */}
          <Text className={` flex-1 mb-4 text-auto`}>
            You may withdraw your consent at any time by emailing{' '}
            <Text
              className={`text-blue-500 underline`}
              onPress={handleEmailPress}>
              leavecovidtracking-us@joinzoe.com.
            </Text>
          </Text>
          <View className="flex-1 flex-row justify-start">
            <Text className={`mb-7 text-auto`}>
              Any questions may also be sent to{' '}
              <Text
                className={`text-blue-500 underline`}
                onPress={handleEmailPress}>
                leavecovidtracking-us@joinzoe.com.
              </Text>
            </Text>
            <View className="flex-1 flex-row justify-start">
              <Text className={`mb-7 text-auto`}>
                Any questions may also be sent to{' '}
                <Text
                  className={`text-blue-500 underline`}
                  onPress={handleEmailPress}>
                  covidtracking-us@joinzoe.com.
                </Text>
              </Text>
            </View>
            <View className={`flex-1 flex-row items-left mb-3`}>
              <CheckBox
                handleCheckChanges={() =>
                  handleCheckBoxChange('isOver18Checked')
                }
                isSelected={checkBoxStates.isOver18Checked}
              />
              <Text className={`text-sm ml-2`}>
                I confirm that I'm over 18 years old.
              </Text>
            </View>
            <View className={`flex-1 flex-row bg-purple-300 items-center mb-4`}>
              <CheckBox
                handleCheckChanges={() =>
                  handleCheckBoxChange('isConsentChecked')
                }
                isSelected={checkBoxStates.isConsentChecked}
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
            <View className={`flex-1 flex-row items-center mb-4`}>
              <CheckBox
                handleCheckChanges={() =>
                  handleCheckBoxChange('isReadAndAcceptChecked')
                }
                isSelected={checkBoxStates.isReadAndAcceptChecked}
              />
              <Text className="text-sm ml-2">
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
          </View>
          
        <View className="flex-1 bg-pink-300 mx-auto">
          <Button 
            innerText='Create Account'
            bgColor='bg-themeBlue'
            border={true}
            textColor='text-white'
            onPress={handleAgree}
            width='5/6'
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default ConsentPage;
