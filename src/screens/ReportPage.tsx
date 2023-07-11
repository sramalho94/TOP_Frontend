import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign'
type Props = {}



const ReportPage = (props: Props) => {


    return (
        <SafeAreaView className="mx-auto my-auto">
            <ScrollView>
                <View className="h-[110] mt-[46] ">
                    <Icon name="arrowleft" size={30} color="#000" />
                    <Text className="text-lg font-bold mx-auto">Report COVID-19 Test Result</Text>
                </View>
                <View>
                    <Text className="text-lg font-bold mx-auto">What were the results of your test?</Text>
                    <View className="justify-center space-x-4 flex-row my-9">
                        <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
                            <Text>Negative</Text>
                        </Pressable>
                        <Pressable className="border-4 border-black flex items-center w-[125] h-[125] rounded-full justify-center">
                            <Text>Positive</Text>
                        </Pressable>
                    </View>
                    <Text className="font-bold">Zip Code*</Text>
                    <TextInput className="border-2 border-black rounded-lg"></TextInput>
                    <Text className="font-bold">Age*</Text>
                    <TextInput className="border-2 border-black rounded-lg"></TextInput>
                    <Text className="font-bold">Gender</Text>
                    <TextInput className="border-2 border-black rounded-lg"></TextInput>
                    <Text className="font-bold">Race</Text>
                    <TextInput className="border-2 border-black rounded-lg"></TextInput>
                    <Text className="font-bold">Ethnicity</Text>
                    <TextInput className="border-2 border-black rounded-lg"></TextInput>
                    <View>
                        {/* <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}

                    /> */}
                        <Text className="font-bold">I agree to share my results with the CDC</Text>
                    </View>
                </View>

                <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg bg-[#B4B4B4]">
                    <Text className="text-lg font-bold">Report Without Account</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    )
}

export default ReportPage