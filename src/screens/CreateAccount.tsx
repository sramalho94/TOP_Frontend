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
import TopNavBar from '../components/TopNavBar';

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
                <TopNavBar fontFamily='' textSize='xl' textValue='Create Account' haveProgress={true} page={1}/>
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
                        onPress={() => console.log('pressed')}
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
};

export default ReportPage;
