import { View, Text, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

type Props = {}

const ReportPage = (props: Props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <SafeAreaView className="mx-auto my-auto flex justify-center">
            <View className="h-[110] mt-[46]">
                <Text className="text-lg font-bold">Report COVID-19 Test Result</Text>
            </View>
            <View>
                <Text className="text-lg font-bold">What were the results of your test?</Text>
                <View></View>
                <View></View>
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
            <View>
                <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg bg-[#B4B4B4]">
                    <Text className="text-lg font-bold">Report Without Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default ReportPage