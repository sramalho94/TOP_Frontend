import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import ProgressDots from '../components/ProgressDots';

type Props = {};

// Define the ReportPage component

const CreateAccount = (props: Props) => {
    // Define switch state
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Define state variables for zip code and age
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle email changes
    const handleEmailChange = (value: string) => {
        setEmail(value);
    };
    // Function to handle username changes
    const handleUsernameChange = (value: string) => {
        setUsername(value);
    };
    // Function to handle password changes
    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };


    switch (currentPage) {
        case 1:
            return (
                <SafeAreaView className="min-w-screen">
                    <ScrollView>
                        <View className="h-150 border-b-4 border-slate-200 ">
                            <View className='flex-row my-6'>
                                <TouchableOpacity className="mt-2 ml-4">
                                    <Icon name="arrowleft" size={30} color="#000" className="" />
                                </TouchableOpacity>
                                <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
                                    Create Account
                                </Text>
                            </View>
                            <View className='mb-3'>
                                <ProgressDots page={1} />
                            </View>
                        </View>
                        <View className="mx-auto my-auto">
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
                                <TextInputField
                                    label="Password*"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder=''
                                />
                            </View>
                        </View>
                        <View className="mb-3 mt-60">
                            <Button
                                onPress={() => setCurrentPage(2)}
                                innerText="Next"
                                textColor="text-white"
                                bgColor="bg-black"
                                border={true}
                                borderColor="border border-4"
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            );
        case 2:
            return (
                <SafeAreaView className="min-w-screen">
                    <ScrollView>
                        <View className="h-150 border-b-4 border-slate-200">
                            <View className='flex-row my-6'>
                                <TouchableOpacity className="mt-2 ml-4">
                                    <Icon name="arrowleft" size={30} color="#000" className="" />
                                </TouchableOpacity>
                                <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
                                    Create Account
                                </Text>
                            </View>
                            <View className='mb-3 flex justify-center'>
                                <ProgressDots page={2} />
                            </View>
                        </View>
                        <View className="mx-auto my-auto">
                            <View className="w-[342]">
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
                                <TextInputField
                                    label="Password*"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder=''
                                />
                            </View>
                        </View>
                        <View className="mb-14 mt-60">
                            <Button
                                onPress={() => setCurrentPage(3)}
                                innerText="Next"
                                textColor="text-white"
                                bgColor="bg-black"
                                border={true}
                                borderColor="border border-4"
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            );
        case 3:
            return (
                <SafeAreaView className="min-w-screen">
                    <ScrollView>
                        <View className="h-150 border-b-4 border-slate-200">
                            <View className='flex-row my-6'>
                                <TouchableOpacity className="mt-2 ml-4">
                                    <Icon name="arrowleft" size={30} color="#000" className="" />
                                </TouchableOpacity>
                                <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
                                    Create Account
                                </Text>
                            </View>
                            <View className='mb-3 flex justify-center'>
                                <ProgressDots page={3} />
                            </View>
                        </View>
                        <View className="mx-auto my-auto">
                            <View className="w-[342]">
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
                                <TextInputField
                                    label="Password*"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder=''
                                />
                            </View>
                        </View>
                        <View className="mb-14 mt-60">
                            <Button
                                onPress={() => setCurrentPage(3)}
                                innerText="Next"
                                textColor="text-white"
                                bgColor="bg-black"
                                border={true}
                                borderColor="border border-4"
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            );
        default:
            return null;
    }
};
export default CreateAccount;
