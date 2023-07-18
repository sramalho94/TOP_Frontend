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

const ReportPage = (props: Props) => {
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
                <View className="mb-3 mt-40">
                    <Button
                        onPress={() => console.log('pressed')}
                        innerText="Report"
                        bgColor="bg-[#B4B4B4]"
                        textColor="text-black"
                        border={true}
                        borderColor="border border-4"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ReportPage;
