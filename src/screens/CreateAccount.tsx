import {View, Text, SafeAreaView, Modal, ScrollView} from 'react-native';
import React, {useState} from 'react';
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Define state variables for zip code and age
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [zipCode, setZipCode] = useState('');
  // need this so that when a user has one dropdown open and selects another, the opened dropdown will close
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [raceOpen, setRaceOpen] = useState<boolean>(false);
  const [ethnicityOpen, setEthnicityOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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

  // Submitting pages:

  // Function to handle submitting page 1
  const handleSubmitPage1 = () => {
    // Check if email and username are not empty
    if (!email || !username) {
      alert('Please fill in all mandatory fields.');
      return; // Prevent proceeding to the next page
    }

    // Check if the email is in the correct format
    if (!isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return; // Prevent proceeding to the next page
    }

    const isPasswordValid = checkPasswordCriteria();
    if (!isPasswordValid) {
      toggleModal();
    } else {
      setCurrentPage(2);
    }
  };

  // Function to handle submitting page 2
  const handleSubmitPage2 = () => {
    // Check if email and username are not empty
    if (!birthday || !zipCode) {
      alert('Please fill in all mandatory fields.');
      return; // Prevent proceeding to the next page
    }

    // Check if the zip code is in the correct format
    if (!isZipCodeValid(zipCode)) {
      alert('Please enter a valid zip code.');
      return; // Prevent proceeding to the next page
    } else {
      setCurrentPage(3);
    }
  };

  switch (currentPage) {
    case 1:
      return (
        <SafeAreaView className="min-w-screen">
          <ScrollView>
            <TopNavBar
              fontFamily=""
              textSize="xl"
              textValue="Create Account"
              haveProgress={true}
              page={1}
            />
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
                onPress={handleSubmitPage1}
                innerText="Next"
                textColor="text-white"
                bgColor="bg-black"
                border={true}
                borderColor="border border-4"
              />
            </View>
            <Modal visible={isModalVisible} transparent={true}>
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
                    onPress={toggleModal}
                    innerText="Close"
                    textColor=""
                    bgColor="bg-[#B4B4B4]"
                    border={true}
                    borderColor="border border-4"
                  />
                </View>
              </View>
            </Modal>
          </ScrollView>
        </SafeAreaView>
      );

    case 2:
      return (
        <SafeAreaView className="min-w-screen">
          <ScrollView>
            <TopNavBar
              fontFamily=""
              textSize="xl"
              textValue="Create Account"
              haveProgress={true}
              page={2}
            />

            <View className="mx-auto my-auto mb-3">
              <View className="w-[342]">
                <View className="my-4 underline">
                  <Button
                    onPress={toggleModal}
                    innerText="(Why do we need this information?)"
                    bgColor=""
                    textColor=""
                    border={false}
                    borderColor="border border-gray"
                    textDecoration="underline"
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
                onPress={handleSubmitPage2}
                innerText="Next"
                textColor="text-white"
                bgColor="bg-black"
                border={true}
                borderColor="border border-4"
              />
            </View>
            <Modal visible={isModalVisible} transparent={true}>
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
                    onPress={toggleModal}
                    innerText="Close"
                    textColor=""
                    bgColor="bg-[#B4B4B4]"
                    border={true}
                    borderColor="border border-4"
                  />
                </View>
              </View>
            </Modal>
          </ScrollView>
        </SafeAreaView>
      );
    case 3:
      return (
        <SafeAreaView className="min-w-screen">
          <ScrollView>
            <TopNavBar
              fontFamily=""
              textSize="xl"
              textValue="Create Account"
              haveProgress={true}
              page={3}
            />
            <View className="mx-auto my-auto justify-between">
              <View className="w-[342]">
                <View className="my-4">
                  <Button
                    onPress={toggleModal}
                    innerText="(Why do we need this information?)"
                    bgColor=""
                    textColor=""
                    border={false}
                    borderColor="border border-gray"
                    textDecoration="underline"
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
                onPress={() => console.log('pressed')}
                innerText="Create Account"
                textColor="text-white"
                bgColor="bg-black"
                border={true}
                borderColor="border border-4"
              />
            </View>
            <Modal visible={isModalVisible} transparent={true}>
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
                    onPress={toggleModal}
                    innerText="Close"
                    textColor=""
                    bgColor="bg-[#B4B4B4]"
                    border={false}
                    borderColor=""
                  />
                </View>
              </View>
            </Modal>
          </ScrollView>
        </SafeAreaView>
      );
    default:
      return null;
  }
};
export default CreateAccount;
