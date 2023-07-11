import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {}

const ThankYouScreen = (props: Props) => {
    return (
        <SafeAreaView className="mx-auto my-auto ">
            <Text className="text-4xl">Thank You!</Text>
            <Text className="text-lg font-bold">Your test results have been reported.</Text>
            <View className="border-2 border-black w-[294] h-[292] mt-[100] "></View>
            <Text className="text-lg font-bold">Join our community and save time on your next reporting by making an account today!</Text>
            <TouchableOpacity className="border-4 border-black flex justify-center items-center w-[342] h-[52] rounded-lg ">
                <Text className="text-lg font-bold">Create Account</Text>
            </TouchableOpacity>
            <Pressable>
                <Text className="text-lg font-bold">Back</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ThankYouScreen