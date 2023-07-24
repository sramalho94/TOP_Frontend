import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import ProgressDots from '../components/ProgressDots';
import DropDownField from '../components/DropDownField';
import PasswordField from '../components/Password';
import { NavigationProp } from '@react-navigation/native';


type Props = {
    navigation: NavigationProp<any>;
};

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
const CreateAccount = ({ navigation }: Props) => {
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


    // Validations: 

    // Function to check if password meets criteria
    const checkPasswordCriteria = () => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
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
            alert('Your password must include at least 8 characters, one uppercase and one lowercase letter, one number and one special ')
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
    }

    switch (currentPage) {
        case 1:
            return (
                <SafeAreaView className="min-w-screen">
                    <ScrollView>
                        <View className="h-150">
                            <View className='mb-3'>
                                <ProgressDots page={1} />
                            </View>
                        </View>
                        <View className="mx-auto my-auto mb-2">
                            <View className="w-[342] mt-4">
                                <TextInputField
                                    label="Email*"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder=''
                                />
                                <TextInputField
                                    label="Username*"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    placeholder=''
                                />
                                <PasswordField setForm={setForm} form={form} />
                            </View>
                        </View>
                        <View className="mt-60">
                            <Button
                                onPress={handleSubmitPage1}
                                innerText="Next"
                                textColor="text-white"
                                bgColor="bg-black"
                                border={false}
                                borderColor=""
                            />
                        </View>
                    </ScrollView >
                </SafeAreaView>
            );

        case 2:
            return (
                <SafeAreaView className="min-w-screen">
                    <ScrollView>
                        <View className="h-150">
                            <View className='my-4 '>
                                <ProgressDots page={2} />
                            </View>
                        </View>
                        <View className="mx-auto my-auto mb-2">
                            <View className="w-[342]">
                                <View className="mb-4">
                                    <TouchableOpacity className="mb-4 mx-auto">
                                        <Text className='underline text-lg' onPress={toggleModal}>(Why do we need this information?)</Text>
                                    </TouchableOpacity>
                                </View>
                                <TextInputField
                                    label="Birthday*"
                                    value={birthday}
                                    onChange={handleBirthdayChange}
                                    placeholder='01/01/2000'
                                />
                                <Text className="my-2">(Users must be 18 to join)</Text>
                                <TextInputField
                                    label="Zip Code*"
                                    value={zipCode}
                                    onChange={handleZipCodeChange}
                                    placeholder=''
                                />
                            </View>
                        </View>
                        <View className="mt-64">
                            <Button
                                onPress={handleSubmitPage2}
                                innerText="Next"
                                textColor="text-white"
                                bgColor="bg-black"
                                border={false}
                                borderColor=""
                            />
                        </View>
                        <Modal visible={isModalVisible} transparent={true}>
                            <View className="flex-1 justify-center items-center bg-opacity-50">
                                <View className="bg-white p-8 rounded-lg w-72 border">
                                    <Text className="text-xl font-bold mb-4">Why do we need this information?</Text>
                                    <Text className="mb-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore beatae quasi officia error distinctio illum laboriosam ea veniam repellendus aperiam, impedit alias suscipit! Maiores sint adipisci repellendus dolor quaerat.</Text>
                                    <Button
                                        onPress={toggleModal}
                                        innerText="Close"
                                        textColor=""
                                        bgColor="bg-[#B4B4B4]"
                                        border={true}
                                        borderColor="border"
                                    />
                                </View>
                            </View>
                        </Modal>
                    </ScrollView>
                </SafeAreaView >
            );
        case 3:
            return (
                <SafeAreaView className="min-w-screen">
                    <View className="h-150">
                        <View className='mt-4 flex justify-center'>
                            <ProgressDots page={3} />
                        </View>
                    </View>
                    <View className="mx-auto my-auto justify-between">
                        <View className="w-[342]">
                            <View className="mb-4">
                                <TouchableOpacity className="mb-4 mx-auto">
                                    <Text className='underline text-lg' onPress={toggleModal}>(Why do we need this information?)</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <DropDownField
                                    text="Gender"
                                    selectItems={[
                                        { label: "MIGHT CHANGE BELOW SELECTION LATER", value: "MIGHT CHANGE BELOW SELECTION LATER" },
                                        { label: "", value: "" },
                                        { label: "Prefer not to say", value: "prefer not to say" },
                                    ]}
                                    open={genderOpen}
                                    onOpen={() => {
                                        setGenderOpen(true)
                                        setRaceOpen(false);
                                        setEthnicityOpen(false);
                                    }}
                                    setOpen={setGenderOpen}
                                />
                                <DropDownField
                                    text="Race"
                                    selectItems={[
                                        { label: "MIGHT CHANGE BELOW SELECTION LATER", value: "MIGHT CHANGE BELOW SELECTION LATER" },
                                        { label: "American Indian or Alaska Native", value: "american indian or alaska native" },
                                        { label: "Asian", value: "asian" },
                                        { label: "Black or African American", value: "black or african american" },
                                        { label: "Native Hawaiian or Other Pacific Islander", value: "native hawaiian or other pacific islander" },
                                        { label: "Not Specified", value: "not specified" },
                                        { label: "Two or More Races/Ethnicities", value: "two or more races/ethnicities" },
                                        { label: "White", value: "white" },
                                        { label: "Prefer not to say", value: "prefer not to say" },
                                    ]}
                                    open={raceOpen}
                                    onOpen={() => {
                                        setGenderOpen(false)
                                        setRaceOpen(true);
                                        setEthnicityOpen(false);
                                    }}
                                    setOpen={setRaceOpen}
                                />
                                <DropDownField
                                    text="Ethnicity"
                                    selectItems={[
                                        { label: "MIGHT CHANGE BELOW SELECTION LATER", value: "MIGHT CHANGE BELOW SELECTION LATER" },
                                        { label: "Hispanic/Latino", value: "hispanic/latino" },
                                        { label: "Non-Hispanic/Latino", value: "non-hispanic/latino" },
                                        { label: "Prefer not to say", value: "prefer not to say" },
                                    ]}
                                    open={ethnicityOpen}
                                    onOpen={() => {
                                        setGenderOpen(false)
                                        setRaceOpen(false);
                                        setEthnicityOpen(true);
                                    }}
                                    setOpen={setEthnicityOpen}
                                />
                            </View>
                        </View>
                    </View>
                    <View className="mt-40">
                        <Button
                            onPress={() => navigation.navigate('Consent Form')}
                            innerText="Create Account"
                            textColor="text-white"
                            bgColor="bg-black"
                            border={false}
                            borderColor=""
                        />
                    </View>
                    <Modal visible={isModalVisible} transparent={true}>
                        <View className="flex-1 justify-center items-center bg-opacity-50 border-4">
                            <View className="bg-white p-8 rounded-lg w-72">
                                <Text className="text-xl font-bold mb-4">Why do we need this information?</Text>
                                <Text className="mb-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore beatae quasi officia error distinctio illum laboriosam ea veniam repellendus aperiam, impedit alias suscipit! Maiores sint adipisci repellendus dolor quaerat.</Text>
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
                </SafeAreaView >
            );
        default:
            return null;
    }
};
export default CreateAccount;