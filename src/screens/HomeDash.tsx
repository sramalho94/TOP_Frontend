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

    // TODO: need to consider: do we need to add a size property for circle btn component?
        // small: w-[104] h-[104]
        // medium: w-[125] h-[125] 
        // large: w-[182] h-[182]
        // text color
        // src property for image buttons??? probs

    return (
        <SafeAreaView className="h-screen w-screen">
            <ScrollView>

                {/* need avatar in upper right side of screen */}


                {/* need giant title text */}


                {/* need giant circle btn, need to refactor circle btn props? */}


                {/* need 3 mini buttons with images, will need to work on tailwind css for placement on screen */}


            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeDash;
