import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import TopNavBar from '../components/TopNavBar';
import CircleBtn from '../components/CircleBtn';
import {useAuth} from '../context/AuthContext';
import ApiService from '../services/ApiService';

interface FormState {
  result: boolean;
  userId: number | null;
  ZIP: string;
  state: string;
  gender: string;
  race: string;
  ethnicity: string;
}

const AccountReportPage: React.FC<{navigation: any}> = ({navigation}) => {
  const {userId: actualUserId} = useAuth();
  const actualUserIdValue = actualUserId ?? null;

  const [formState, setFormState] = useState<FormState>({
    result: false,
    userId: actualUserIdValue,
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
      navigation.navigate('ThankYouScreen');
      setFormState({
        result: false,
        userId: formState.userId,
        ZIP: '',
        state: '',
        gender: '',
        race: '',
        ethnicity: '',
      });
    } catch (error) {
      console.log('Create Covid Message: ' + error);
    }
    console.log('Covid Info: ' + JSON.stringify(formState));
  };

  return (
    <SafeAreaView className="min-w-screen">
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
          <View className="justify-center space-x-4 flex-row my-8">
            <View className="m-2">
              <CircleBtn
                bgColor="bg-themeLightBlue"
                updateForm={() => handleChange('result', false)}
                text="Negative"
                Btnwidth="w-32"
                Btnheight="h-32"
                textSize="base"
                value={true}
              />
            </View>
            <View className="m-2">
              <CircleBtn
                text="Positive"
                bgColor="bg-themeLightOrange"
                updateForm={() => handleChange('result', true)}
                Btnwidth="w-32"
                Btnheight="h-32"
                textSize="base"
                value={false}
              />
            </View>
          </View>

          {/* Text input fields container */}
          <View className="">
            <TextInputField
              label="State*"
              value={formState.state}
              onChange={value => handleChange('state', value)}
              placeholder="Enter your state"
            />
            <TextInputField
              label="Zip Code*"
              value={formState.ZIP}
              onChange={value => handleChange('ZIP', value)}
              placeholder="Enter your ZIP code"
            />
          </View>

          {/* Submit button */}
          <View className="my-4">
            <Button
              onPress={handleSubmit}
              innerText="Submit"
              textColor="text-white"
              bgColor="bg-themeBlue"
              border={true}
              width="80"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountReportPage;
