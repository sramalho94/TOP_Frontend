import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import NoImage from '../../../assets/nopicture.png'

const Onboard1 = () => {


    return (
        <>
            <SafeAreaView className="h-screen w-screen">
                <ScrollView>
                    <View className="flex-1">

                        {/* image and text */}
                        <View className="m-5">
                            <Image className="w-full" source={NoImage}></Image>
                            <Text className="mx-auto py-5">What the app does and the impact of data</Text>
                        </View>

                        {/* container for dots and buttons */}
                        <View className="flex-1 flex-end mt-32 justify-end">

                            {/* progress dots */}
                            <View className="flex-row mx-auto">
                                <View className="rounded-lg bg-black w-3 h-3 m-1"></View>
                                <View className="rounded-lg bg-gray-300 w-3 h-3 m-1"></View>
                                <View className="rounded-lg bg-gray-300 w-3 h-3 m-1"></View>
                            </View>

                            {/* buttons */}
                            <View className="m-5">
                                <TouchableOpacity className="rounded border justify-items-center">
                                    <Text className="text-center py-3">Continue</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="justify-items-center">
                                    <Text className="text-center py-3">Skip</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )

}

export default Onboard1;