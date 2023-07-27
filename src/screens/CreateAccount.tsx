import {View, Text, SafeAreaView, Modal, ScrollView, Animated, NativeSyntheticEvent, NativeScrollEvent, useWindowDimensions} from 'react-native';
import React, { useState, useRef} from 'react';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import TopNavBar from '../components/TopNavBar';
import DropDownField from '../components/DropDownField';
import PasswordField from '../components/Password';

type Props = {};

type FormState = {
  username: string;
  password: string;
  showPassword: boolean;
};

const initialFormState: FormState = {
  username: '',
  password: '',
  showPassword: false,
};

// Define the ReportPage component
const CreateAccount = (props: Props) => {
  // Define switch state
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  // Define state variables for zip code and age
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isModalVisiblePage0, setIsModalVisiblePage0] = useState(false);
  const [isModalVisiblePage1, setIsModalVisiblePage1] = useState(false);
  const [isModalVisiblePage2, setIsModalVisiblePage2] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [zipCode, setZipCode] = useState('');
  // need this so that when a user has one dropdown open and selects another, the opened dropdown will close
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

  const toggleModalPage0 = () => {
    setIsModalVisiblePage0(!isModalVisiblePage0);
  };
  
  const toggleModalPage1 = () => {
    setIsModalVisiblePage1(!isModalVisiblePage1);
  };
  
  const toggleModalPage2 = () => {
    setIsModalVisiblePage2(!isModalVisiblePage2);
  };

  // Handling input field changes:

  // Function to handle email changes
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  // Function to handle username changes
  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  // Function to handle birthday changes
  const handleBirthdayChange = (value: string) => {
    setBirthday(value);
  };
  // Function to handle zip code changes
  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
  };

  const handleGenderChange = (value: boolean) => {
    setGenderOpen(value);
  };

  const handleRaceChange = (value: boolean) => {
    setRaceOpen(value);
  };

  const handleEthnicityChange = (value: boolean) => {
    setEthnicityOpen(value);
  };

  // Validations:

  // Function to check if password meets criteria
  const checkPasswordCriteria = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    return passwordPattern.test(form.password);
  };

  // Function to check if email format is correct
  const isEmailValid = (email: string): boolean => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to check if zip code format is correct
  const isZipCodeValid = (zipCode: string): boolean => {
    // Regular expression for US zip code validation (5 digits)
    const zipCodePattern = /^\d{5}$/;
    return zipCodePattern.test(zipCode);
  };


// Swipe animation:
const scrollViewRef = useRef<ScrollView>(null);
const { width } = useWindowDimensions();
const swipeAnim = useRef(new Animated.Value(0)).current;

let userScrolled = false;

const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  const offsetX = event.nativeEvent.contentOffset.x;
  const newPage = Math.round(offsetX / width);

  console.log("width: handlescroll:", width); // Debug
  console.log("page: handlescroll:", newPage); // Debug
  console.log("offsetX: handlescroll:", offsetX);

  if (userScrolled) {
    setScrollEnabled(false);  // Disable scrolling while validating
    if (newPage > currentPage) {
      // Swiping forwards
      if (newPage === 1) {
        if (handleSubmitPage0()) {
          handleSwipeAnimation(1);
        }
      } else if (newPage === 2) {
        if (handleSubmitPage1()) {
          handleSwipeAnimation(2);
        }
      }
    }
    setCurrentPage(newPage); // Always update current page after the checks
  }
  setScrollEnabled(true);  // Enable scrolling after validating
};

const handleSwipeAnimation = (targetPage: number) => {
  scrollViewRef.current?.scrollTo({ x: width * targetPage, animated: true });
  userScrolled = false; // Reset the userScrolled flag
  setCurrentPage(targetPage); // Update the current page
};

// In your touch handlers, set userScrolled to true when the user initiates a scroll
const handleTouchStart = () => {
  userScrolled = true;
};


  // Submitting pages:

  // Function to handle submitting page 0

  const handleSubmitPage0 = () => {
    handleSwipeAnimation(1);
    return true;
  };

// Function to handle submitting page 1
const handleSubmitPage1 = () => {
  handleSwipeAnimation(2);
  return true;
};

const handleSubmit = () => {
  if (!email || !username) {
    alert('Please fill in all mandatory fields.');
    scrollViewRef.current?.scrollTo({ x: 0, animated: true });
    return false;
  }
  if (!isEmailValid(email)) {
    alert('Please enter a valid email address.');
    scrollViewRef.current?.scrollTo({ x: 0, animated: true });
    return false;
  }
  const isPasswordValid = checkPasswordCriteria();
  if (!isPasswordValid) {
    toggleModalPage0();
    scrollViewRef.current?.scrollTo({ x: 0, animated: true });
    return false;
  } 
  if (!birthday || !zipCode) {
    alert('Please fill in all mandatory fields.');
    scrollViewRef.current?.scrollTo({ x: width, animated: true });
    return false;
  }
  if (!isZipCodeValid(zipCode)) {
    alert('Please enter a valid zip code.');
    scrollViewRef.current?.scrollTo({ x: width, animated: true });
    return false;
  }
  console.log("Successfully submitted!")
}

  const pages = [
        <View key={1} className="w-screen">
          <View className='h-[110]'>
            <TopNavBar
              fontFamily=""
              textSize="xl"
              textValue="Create Account"
              haveProgress={true}
              page={1}
              />
              </View>
            <View className="mx-auto my-auto mb-2">
              <View className="w-[342] mt-4">
                <TextInputField
                  label="Email*"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder=""
                />
                <TextInputField
                  label="Username*"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder=""
                />
                <PasswordField setForm={setForm} form={form} />
              </View>
            </View>
            <View className="mt-48">
              <Button
                onPress={handleSubmitPage0}
                innerText="Next"
                textColor="text-white"
                bgColor="bg-black"
                border={true}
                borderColor="border border-4"
                width='80'
              />
            </View>
            <Modal visible={isModalVisiblePage0} transparent={true}>
              <View className="flex-1 justify-center items-center bg-opacity-50">
                <View className="bg-white p-8 rounded-lg w-72 border-4">
                  <Text className="text-xl font-bold mb-4">
                    Your password must include:
                  </Text>
                  <Text className="mb-2">- At least 8 characters</Text>
                  <Text className="mb-2">
                    - One uppercase and one lowercase letter
                  </Text>
                  <Text className="mb-2">
                    - One number and one special character
                  </Text>
                  <Button
                    onPress={toggleModalPage0}
                    innerText="Close"
                    textColor=""
                    bgColor="bg-[#B4B4B4]"
                    border={true}
                    borderColor="border border-4"
                    width='5/6'
                  />
                </View>
              </View>
            </Modal>
          </View>,
        <View key={2} className="w-screen">
          <View className='h-[110]'>
            <TopNavBar
              fontFamily=""
              textSize="xl"
              textValue="Create Account"
              haveProgress={true}
              page={2}
            />
          </View>
            <View className="mx-auto my-auto mb-3">
              <View className="w-[342]">
                <View className="my-4 underline">
                  <Button
                    onPress={toggleModalPage1}
                    innerText="(Why do we need this information?)"
                    bgColor=""
                    textColor=""
                    border={false}
                    borderColor="border border-gray"
                    textDecoration="underline"
                    width='80'
                  />
                </View>
                <TextInputField
                  label="Birthday*"
                  value={birthday}
                  onChange={handleBirthdayChange}
                  placeholder=""
                />
                <TextInputField
                  label="Zip Code*"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  placeholder=""
                />
              </View>
            </View>
            <View className="mt-56">
              <Button
                onPress={handleSubmitPage1}
                innerText="Next"
                textColor="text-white"
                bgColor="bg-black"
                border={true}
                borderColor="border border-4"
                width='80'
              />
            </View>
            <Modal visible={isModalVisiblePage1} transparent={true}>
              <View className="flex-1 justify-center items-center bg-opacity-50">
                <View className="bg-white p-8 rounded-lg w-72 border-4">
                  <Text className="text-xl font-bold mb-4">
                    Why do we need this information?
                  </Text>
                  <Text className="mb-2 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur tempore beatae quasi officia error distinctio illum
                    laboriosam ea veniam repellendus aperiam, impedit alias
                    suscipit! Maiores sint adipisci repellendus dolor quaerat.
                  </Text>
                  <Button
                    onPress={toggleModalPage1}
                    innerText="Close"
                    textColor=""
                    bgColor="bg-[#B4B4B4]"
                    border={true}
                    borderColor="border border-4"
                    width='5/6'
                  />
                </View>
              </View>
            </Modal>
          </View>, 
        <View key={3} className="w-screen">
            <View className='h-[110]'>
            <TopNavBar
              fontFamily=""
              textSize="xl"
              textValue="Create Account"
              haveProgress={true}
              page={3}
            />
            </View>
            <View className="mx-auto my-auto justify-between">
              <View className="w-[342]">
                <View className="my-4">
                  <Button
                    onPress={toggleModalPage2}
                    innerText="(Why do we need this information?)"
                    bgColor=""
                    textColor=""
                    border={false}
                    borderColor="border border-gray"
                    textDecoration="underline"
                    width='80'
                  />
                </View>
                <DropDownField
                  text="Gender"
                  selectItems={[
                    {
                      label: 'MIGHT CHANGE BELOW SELECTION LATER',
                      value: 'MIGHT CHANGE BELOW SELECTION LATER',
                    },
                    {label: '', value: ''},
                    {label: 'Prefer not to say', value: 'prefer not to say'},
                  ]}
                  open={genderOpen}
                  onOpen={() => {
                    setGenderOpen(true);
                    setRaceOpen(false);
                    setEthnicityOpen(false);
                  }}
                  setOpen={handleGenderChange}
                />
                <DropDownField
                  text="Race"
                  selectItems={[
                    {
                      label: 'MIGHT CHANGE BELOW SELECTION LATER',
                      value: 'MIGHT CHANGE BELOW SELECTION LATER',
                    },
                    {
                      label: 'American Indian or Alaska Native',
                      value: 'american indian or alaska native',
                    },
                    {label: 'Asian', value: 'asian'},
                    {
                      label: 'Black or African American',
                      value: 'black or african american',
                    },
                    {
                      label: 'Native Hawaiian or Other Pacific Islander',
                      value: 'native hawaiian or other pacific islander',
                    },
                    {label: 'Not Specified', value: 'not specified'},
                    {
                      label: 'Two or More Races/Ethnicities',
                      value: 'two or more races/ethnicities',
                    },
                    {label: 'White', value: 'white'},
                    {label: 'Prefer not to say', value: 'prefer not to say'},
                  ]}
                  open={raceOpen}
                  onOpen={() => {
                    setGenderOpen(false);
                    setRaceOpen(true);
                    setEthnicityOpen(false);
                  }}
                  setOpen={handleRaceChange}
                />
                <DropDownField
                  text="Ethnicity"
                  selectItems={[
                    {
                      label: 'MIGHT CHANGE BELOW SELECTION LATER',
                      value: 'MIGHT CHANGE BELOW SELECTION LATER',
                    },
                    {label: 'Hispanic/Latino', value: 'hispanic/latino'},
                    {
                      label: 'Non-Hispanic/Latino',
                      value: 'non-hispanic/latino',
                    },
                    {label: 'Prefer not to say', value: 'prefer not to say'},
                  ]}
                  open={ethnicityOpen}
                  onOpen={() => {
                    setGenderOpen(false);
                    setRaceOpen(false);
                    setEthnicityOpen(true);
                  }}
                  setOpen={handleEthnicityChange}
                />
              </View>
            </View>
            <View className="mt-40">
              <Button
                onPress={handleSubmit}
                innerText="Create Account"
                textColor="text-white"
                bgColor="bg-black"
                border={true}
                borderColor="border border-4"
                width='80'
              />
            </View>
            <Modal visible={isModalVisiblePage2} transparent={true}>
              <View className="flex-1 justify-center items-center bg-opacity-50 border-4">
                <View className="bg-white p-8 rounded-lg w-72">
                  <Text className="text-xl font-bold mb-4">
                    Why do we need this information?
                  </Text>
                  <Text className="mb-2 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur tempore beatae quasi officia error distinctio illum
                    laboriosam ea veniam repellendus aperiam, impedit alias
                    suscipit! Maiores sint adipisci repellendus dolor quaerat.
                  </Text>
                  <Button
                    onPress={toggleModalPage2}
                    innerText="Close"
                    textColor=""
                    bgColor="bg-[#B4B4B4]"
                    border={false}
                    borderColor=""
                    width='5/6'
                  />
                </View>
              </View>
            </Modal>
          </View>
  ]

  return (
    <SafeAreaView>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {pages}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateAccount;
