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
import ProgressDots from '../../components/ProgressDots'


const Onboard1 = () => {


    return (
        <>
            <SafeAreaView className="h-screen w-screen">
                <View className="flex-1 flex-col mb-3">

                    {/* image and text */}
                    <View className="m-5 flex-1">
                        <Image className="w-full" source={NoImage}></Image>
                        <Text className="mx-auto py-5 font-sans text-[22px]">What the app does and the impact of data</Text>
                    </View>

                    {/* container for dots and buttons */}
                    <View className="flex-1 flex-col-reverse">

                        {/* progress dots */}
                        


                    </View>
                </View>
            </SafeAreaView>
        </>
    )

}

export default Onboard1;