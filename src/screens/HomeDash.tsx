import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'; // might need this for the avatar?
import CircleBtn from '../components/CircleBtn';

type Props = {};

const HomeDash = (props: Props) => {

    return (
        <SafeAreaView className="h-screen w-screen">
            <ScrollView>

                {/* need avatar in upper right side of screen */}
                <Text>Home Dash</Text>

                {/* need giant title text */}


                {/* need giant circle btn, need to refactor circle btn props? */}


                {/* need 3 mini buttons with images, will need to work on tailwind css for placement on screen */}


            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeDash;
