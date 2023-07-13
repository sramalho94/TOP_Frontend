import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import NoImage from '../../../assets/nopicture.png'
import ProgressDots from '../../components/ProgressDots';


const Onboard3 = () => {


    return (
        <>
            <SafeAreaView className="h-screen w-screen">
                <View className="flex-1 flex-col mt-4 mb-3">

                    {/* image and text */}
                    <View className="m-5 flex-1">
                        <Image className="w-full" source={NoImage}></Image>
                        {/* TODO: maybe? change font style? Wrote font-sans earlier but it didn't change the font*/}
                        <Text className="mx-auto py-5 text-[22px]">What the data is not used for</Text>
                    </View>

                    {/* container for dots and buttons */}
                    <View className="flex-1 flex-col-reverse">

                        

                        {/* buttons */}
                        <View className="m-5">
                            {/* TODO: need to wait for button team to add border option. Then we need to change that prop for SKIP */}
                            {/* TODO: need to change background color to one of the tailwind themes */}
                            <Button bgColor='bg-blue-500' text='Continue' onPress={handlePress} />
                            <Button bgColor='' text='Skip' onPress={handlePress} />
                        </View>

                        <ProgressDots page={3} />

                    </View>
                </View>
            </SafeAreaView>
        </>
    )

}

export default Onboard3;