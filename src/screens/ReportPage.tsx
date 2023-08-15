import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '../components/CheckBox';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import DropDownField from '../components/DropDownField';
import Button from '../components/Button';
import CircleBtn from '../components/CircleBtn';
import ApiService from '../services/ApiService';
import NegTest from './../../assets/Negresult.png';
import PosTest from './../../assets/PositiveCovidTest.png';
import TopNavBar from '../components/TopNavBar';

// Define the ReportPage component
export interface FormState {
  result: boolean | null;
  DOB: string;
  DOT: string;
  ZIP: string;
  gender: string;
  race: string;
  ethnicity: string;
}

const ReportPage: React.FC<{navigation: any}> = ({navigation}) => {
  const [negColor, setNegColor] = useState<string>('bg-themeWhite');
  const [posColor, setPosColor] = useState<string>('bg-themeWhite');
  const [negTextColor, setNegTextColor] = useState<string>('text-themeBlue');
  const [posTextColor, setPosTextColor] = useState<string>(
    'text-themeLightOrange',
  );
  const [formState, setFormState] = useState<FormState>({
    result: null,
    DOB: '',
    DOT: '',
    ZIP: '',
    gender: '',
    race: '',
    ethnicity: '',
  });

  const handleReportButtonClick = () => {
    // Call the createTest method from the ApiService
    ApiService.createTest(formState)
      .then(Response => {
        console.log('createTestResponse', Response.data);

        if (Response.data.test.result === true) {
          navigation.navigate('ThankYouScreen', {
            logIn: false,
            resultState: true,
          });
        } else {
          navigation.navigate('ThankYouScreen', {
            logIn: false,
            resultState: false,
          });
        }

        console.log('test created successfully:', Response.data);
        setFormState({
          result: null,
          DOB: '',
          DOT: '',
          ZIP: '',
          gender: '',
          race: '',
          ethnicity: '',
        });
      })
      .catch(Error => {
        console.log('Error creating test:', Error);
      });
  };

  const [isCheckboxSelected, setCheckboxSelection] = useState(false);

  const handleCheckChanges = () => {
    setCheckboxSelection(prevState => !prevState);
  };

  const updateFormState = (field: string, value: string | boolean) => {
    setFormState((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

  return (
    <SafeAreaView className="bg-themeWhite w-screen h-screen flex-1">
      {/* NavBar */}
      <TopNavBar
        textValue="Report COVID-19 Test Result"
        fontFamily=""
        textSize="xl"
        haveProgress={false}
      />
      <ScrollView>
        {/* Page Container */}
        <View
          className="flex-1 w-full justify-center items-center flex-col"
          accessibilityLabel="Report Covid Test Page without an Account"
          accessibilityHint="Covid Test Reporting without an Account or anonymously"
          accessibilityRole="header">
          <View className="flex-1 flex-col max-w-md mb-10">
            <Text className="text-xl text-black mt-10 mx-auto">
              What were the results of your test?
            </Text>
            <View className="flex-1 justify-center space-x-4 flex-row my-9">
              <View className="m-2">
                <CircleBtn
                  textColor={negTextColor}
                  bgColor={negColor}
                  borderColor="border border-4 border-themeLightBlue"
                  updateForm={() => {
                    updateFormState('result', false);
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
                  borderColor="border border-4 border-themeLightOrange"
                  text="Positive"
                  bgColor={posColor}
                  updateForm={() => {
                    updateFormState('result', true);
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
            <View className="w-screen items-center ">
              <TextInputField
                label="Date of Test*"
                value={formState.DOT}
                onChange={value => updateFormState('DOT', value)}
                placeholder="mm/dd/yyyy"
              />
              <TextInputField
                label="Zip Code*"
                value={formState.ZIP}
                onChange={value => updateFormState('ZIP', value)}
                placeholder="Enter your ZIP code"
              />
              <TextInputField
                label="Date of Birth*"
                value={formState.DOB}
                onChange={value => updateFormState('DOB', value)}
                placeholder="mm/dd/yyyy"
              />

              <DropDownField
                text="Gender"
                selectItems={[
                  {
                    label: 'Woman',
                    value: 'Woman',
                  },
                  {
                    label: 'Man',
                    value: 'Man',
                  },
                  {label: 'Non-binary', value: 'Non-binary'},
                  {
                    label: 'I prefer not to answer',
                    value: 'I prefer not to answer',
                  },
                ]}
                open={genderOpen}
                onOpen={() => {
                  setGenderOpen(true);
                  setRaceOpen(false);
                  setEthnicityOpen(false);
                }}
                onChange={value => updateFormState('gender', value)}
                setOpen={setGenderOpen}
                accessLabel="gender menu"
                accessHint="Drop down options to select your gender"
              />
              <DropDownField
                text="Race"
                selectItems={[
                  {label: 'White or European', value: 'White or European'},
                  {
                    label: 'Black or of African descent',
                    value: 'Black or of African descent',
                  },
                  {
                    label: 'Middle Eastern or North African',
                    value: 'Middle Eastern or North African',
                  },
                  {
                    label: 'Indigenous, American Indian or Alaska Native',
                    value: 'Indigenous, American Indian or Alaska Native',
                  },
                  {
                    label: 'Native Hawaiian or Other Pacific Islander',
                    value: 'native hawaiian or other pacific islander',
                  },
                  {label: 'East Asian', value: 'East Asian'},
                  {label: 'Southeast Asian', value: 'Southeast Asian'},
                  {label: 'South Asian', value: 'South Asian'},
                  {
                    label: 'Two or More Races/Ethnicities',
                    value: 'two or more races/ethnicities',
                  },
                  {
                    label: 'I prefer not to answer',
                    value: 'I prefer not to answer',
                  },
                ]}
                open={raceOpen}
                onOpen={() => {
                  setGenderOpen(false);
                  setRaceOpen(true);
                  setEthnicityOpen(false);
                }}
                onChange={value => updateFormState('race', value)}
                setOpen={setRaceOpen}
                accessLabel="race menu"
                accessHint="Drop down options to select your race"
              />
              <DropDownField
                text="Ethnicity"
                selectItems={[
                  {label: 'Hispanic/Latino', value: 'hispanic/latino'},
                  {
                    label: 'Non-Hispanic/Latino',
                    value: 'Non-hispanic/latino',
                  },
                  {
                    label: 'I prefer not to answer',
                    value: 'I prefer not to answer',
                  },
                ]}
                open={ethnicityOpen}
                onOpen={() => {
                  setGenderOpen(false);
                  setRaceOpen(false);
                  setEthnicityOpen(true);
                }}
                onChange={value => updateFormState('ethnicity', value)}
                setOpen={setEthnicityOpen}
                accessLabel="ethnicity menu"
                accessHint="Drop down options to select your ethnicity"
              />
            </View>
            <View className="flex-1 flex-row justify-center my-6">
              <CheckBox
                isSelected={isCheckboxSelected}
                handleCheckChanges={handleCheckChanges}
                accessHint="If you click in this box, you will agree to share results with CDC"
              />
              <Text className="font-semibold mt-1 text-black text-[16px]">
                I agree to share my results with the CDC
              </Text>
            </View>
            <View className="flex-1 mt-10 mx-auto justify-end">
              <Button
                onPress={handleReportButtonClick}
                innerText="Report"
                bgColor="bg-themeBlue"
                textColor="text-themeWhite"
                border={false}
                width="80"
                accessLabel="Report"
                accessHint="Reports test results"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportPage;
