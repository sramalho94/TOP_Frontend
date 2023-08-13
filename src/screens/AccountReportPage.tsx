import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import TopNavBar from '../components/TopNavBar';
import CircleBtn from '../components/CircleBtn';
import {useAuth} from '../context/AuthContext';
import ApiService from '../services/ApiService';
import NegTest from './../../assets/NegativeCovidTest.png';
import PosTest from './../../assets/PositiveCovidTest.png';

interface FormState {
  result: boolean | null;
  userId: number | null;
  DOT: string;
  DOB: string | null;
  ZIP: string;
  state: string;
  gender: string;
  race: string;
  ethnicity: string;
}

const AccountReportPage: React.FC<{navigation: any}> = ({navigation}) => {
  const {userId: actualUserId, DOB} = useAuth();
  const actualUserIdValue = actualUserId ?? null;
  const DOBVal = DOB ?? null;
  const [negColor, setNegColor] = useState<string>('bg-themeWhite');
  const [posColor, setPosColor] = useState<string>('bg-themeWhite');
  const [negTextColor, setNegTextColor] = useState<string>('text-black');
  const [posTextColor, setPosTextColor] = useState<string>('text-black');
  const [formState, setFormState] = useState<FormState>({
    result: null,
    DOB: DOBVal,
    userId: actualUserIdValue,
    DOT: '',
    ZIP: '',
    state: '',
    gender: '',
    race: '',
    ethnicity: '',
  });

  const handleChange: any = (field: string, value: string) => {
    setFormState(prevState => ({...prevState, [field]: value}));
  };

  const handleSubmit: any = async (e: any) => {
    e.preventDefault();

    // Check if userId is not null before proceeding
    if (formState.userId === null) {
      console.error('UserId is null. Cannot proceed with the API call.');
      return;
    }

    try {
      const res = await ApiService.createTestWithAccount({
        ...formState,
        userId: formState.userId as number,
      });
      console.log('res: ', res);

      if (res.data.test.result === true) {
        navigation.navigate('PositiveThankYouScreen', {logIn: true});
      } else {
        navigation.navigate('ThankYouScreen');
      }

      setFormState({
        result: null,
        userId: formState.userId,
        DOT: '',
        ZIP: '',
        state: '',
        gender: '',
        race: '',
        ethnicity: '',
        DOB: DOBVal,
      });
    } catch (error) {
      console.log('Create Covid Message: ' + error);
    }
    console.log('Covid Info: ' + JSON.stringify(formState));
  };

  return (
    <SafeAreaView className="flex-1 min-w-screen">
      <ScrollView>
        <TopNavBar
          textSize="xl"
          fontFamily=""
          haveProgress={false}
          textValue="Report COVID-19 Test Result"
        />

        {/* Page container */}
        <View className="justify-center mx-auto max-w-sm">
          <Text className="text-lg font-bold mx-auto">
            What were the results of your test?
          </Text>

          {/* Result Buttons Container */}
          <View className="flex-1 justify-center space-x-4 flex-row my-8">
            <View className="m-2">
             <CircleBtn
                  textColor={negTextColor}
                  bgColor={negColor}
                  borderColor="border-themeLightBlue"
                  updateForm={() => {
                    handleChange('result', false);
                    setNegColor('bg-themeLightBlue');
                    setPosColor('bg-themeWhite');
                    setNegTextColor('text-white');
                    setPosTextColor('text-black');
                  }}
                  text="Negative"
                  Btnwidth="w-32"
                  Btnheight="h-32"
                  textSize="text-xl"
                  value={false}
                  accessLabel="Negative"
                  accessHint="Touch if your test results are negative"
                  img={NegTest}
                />
            </View>
            <View className="m-2">
            <CircleBtn
                  textColor={posTextColor}
                  borderColor="border-themeLightOrange"
                  text="Positive"
                  bgColor={posColor}
                  updateForm={() => {
                    handleChange('result', true);
                    setNegColor('bg-themeWhite');
                    setPosColor('bg-themeLightOrange');
                    setNegTextColor('text-black');
                    setPosTextColor('text-white');
                  }}
                  Btnwidth="w-32"
                  Btnheight="h-32"
                  textSize="text-xl"
                  value={true}
                  accessLabel="Positive"
                  accessHint="Touch if your test results are positive"
                  img={PosTest}
                />
            </View>
          </View>

          {/* Text input fields container */}
          <View className="">
            <TextInputField
              label="Date of Test*"
              value={formState.DOT}
              onChange={value => handleChange('DOT', value)}
              placeholder="mm/dd/yyyy"
            />
            <TextInputField
              label="Zip Code*"
              value={formState.ZIP}
              onChange={value => handleChange('ZIP', value)}
              placeholder="Enter your ZIP code"
            />
          </View>

          {/* Submit button */}
          <View className="my-4 flex-1">
            <Button
              onPress={handleSubmit}
              innerText="Submit"
              textColor="text-white"
              bgColor="bg-themeBlue"
              border={true}
              width="80"
              accessLabel="Report"
              accessHint="Reports test results"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountReportPage;
