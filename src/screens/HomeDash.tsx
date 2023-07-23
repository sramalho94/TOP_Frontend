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
import { Image } from 'react-native';
import FlowerImg from '../../assets/orange-flower.png';
import { NavigationProp } from '@react-navigation/native';


type Props = {
  navigation: NavigationProp<any>;
};

const HomeDash = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="h-screen w-screen">
      <ScrollView>
        {/* View for whole screen */}
        <View className="flex flex-col w-full min-h-screen  justify-center items-center py-6 px-6">
          {/* View for avatar, text and report test */}
          <View className="flex w-full justify-center items-center ">
            {/* View for avatar*/}
            {/* FIXME: size={72} on avatar does not work for android, might be something with size? idk
            update* it also stopped working for IOS */}
            <View className="self-end mb-2">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
            </View>
            <Text className="text-3xl font-bold mb-2 text-center">Community {'\n'}Test Lab</Text>
            {/* need giant circle btn, need to refactor circle btn props? */}
            <CircleBtn
              text={`Report \n Test`}
              bgColor="bg-themeLightOrange"
              onPress={() => navigation.navigate('Report COVID-19 Test Results')}
              Btnsize={182}
              textSize='3xl'
            />
          </View>

          {/*View for 3 mini buttons*/}
          <View className="w-full mb-6 flex justify-center flex-row">
            <View className="-mt-5">
              <CircleBtn
                img={FlowerImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
              <Text className="text-center p-3 text-black text-base">Privacy</Text>
            </View>

            <View className="mt-16">
              <CircleBtn
                img={FlowerImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
              <Text className="text-center p-3 text-black text-base">Dashboard</Text>
            </View>

            <View className="mt-1">
              <CircleBtn
                img={FlowerImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
              <Text className="text-center p-3 text-black text-base">Exchange</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDash;