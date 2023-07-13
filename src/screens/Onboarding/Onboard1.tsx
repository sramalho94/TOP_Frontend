import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import NoImage from '../../../assets/nopicture.png'
import ProgressDots from '../../components/ProgressDots'
import Button from '../../components/Button'
// import { useNavigation } from '@react-navigation/native';
// import Onboard2 from './Onboard2';
// import { RootStackParamList } from '../../../App'
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Props = {};

// export type NavigationProp = NativeStackNavigationProp<
// RootStackParamList,
// 'Onboard1'
// > 


const Onboard1 = () => {

    //below is not ready yet
    // const navigation = useNavigation();

    const handlePress = () => {
        // navigation.navigate("Onboard2");
        console.log("click")
    }

    return (
        <>
            <SafeAreaView className="h-screen w-screen">
                <View className="flex-1 flex-col mt-4 mb-3">

                    {/* image and text */}
                    <View className="m-5 flex-1">
                        <Image className="w-full" source={NoImage}></Image>
                        {/* TODO: maybe? change font style? Wrote font-sans earlier but it didn't change the font*/}
                        <Text className="mx-auto py-5 font-serif text-[22px]">What the app does and the impact of data</Text>
                    </View>

                    {/* container for dots and buttons */}
                    <View className="flex-1 flex-col-reverse">


                        {/* buttons */}
                        <View className="m-5">
                            {/* TODO: need to wait for button team to add border option. Then we need to change that prop for SKIP */}
                            {/* TODO: need to change background color to one of the tailwind themes */}
                            <Button bgColor='bg-blue-500' text='Continue' onPress={handlePress} />
                            <Button bgColor='' text='Skip' onPress={handlePress} />
                            {/* <TouchableOpacity className="rounded border justify-items-center">
                                <Text className="text-center py-3 font-sans text-[22px]">Continue</Text>
                            </TouchableOpacity> */}
                            {/* <TouchableOpacity className="justify-items-center">
                                <Text className="text-center py-3 font-sans text-[22px]">Skip</Text>
                            </TouchableOpacity> */}
                        </View>

                        {/* progress dots */}
                        
                        <ProgressDots page={1} />

                    </View>
                </View>
            </SafeAreaView>
        </>
    )

}

export default Onboard1;