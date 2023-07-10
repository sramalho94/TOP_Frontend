import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import NoImage from '../../../assets/nopicture.png'

const Onboard1 = () => {


    return (
        <>
            <SafeAreaView>
                <View className="">
                    <Image source={NoImage}></Image>
                    <Text>What the app does and the impact of data</Text>
                </View>
            </SafeAreaView>
        </>
    )

}

export default Onboard1;