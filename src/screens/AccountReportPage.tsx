import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';

type Props = {};

const AccountReportPage = (props: Props) => {
    // State for storing the zip code
    const [zipCode, setZipCode] = useState('');
    // State for storing the state
    const [state, setState] = useState('');

    // Update the zip code state when the input value changes
    const handleZipCodeChange = (value: string) => {
        setZipCode(value);
    };
    // Update the state state when the input value changes
    const handleStateChange = (value: string) => {
        setState(value);
    };

    return (
        <SafeAreaView className="min-w-screen">
            <View>
                <View className="h-[90] border-b-4 border-slate-200 flex-row my-6">
                    <TouchableOpacity className="mt-2 ml-4">
                        <Icon name="arrowleft" size={30} color="#000" className="" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold mx-auto mt-2 flex pr-12">
                        Report COVID-19 Test Result
                    </Text>
                </View>
                <View className="mx-auto my-auto">
                    <Text className="text-lg font-bold mx-auto">
                        What were the results of your test?
                    </Text>
                    <View className="justify-center space-x-4 flex-row my-12">
                        <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
                            <Text>Negative</Text>
                        </Pressable>
                        <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
                            <Text>Positive</Text>
                        </Pressable>
                    </View>
                    <View className="w-[342] mx-4">
                        <TextInputField
                            label="State*"
                            value={state}
                            onChange={handleStateChange}
                            placeholder="Michigan"
                        />
                        <TextInputField
                            label="Zip Code*"
                            value={zipCode}
                            onChange={handleZipCodeChange}
                            placeholder="49301"
                        />
                    </View>
                    <View className="my-20">
                        <Button
                            onPress={() => { }}
                            innerText="Submit"
                            textColor="text-white"
                            bgColor="bg-black"
                            border={true}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AccountReportPage;
