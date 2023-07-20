import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign'; // might need this for the avatar?
import CircleBtn from '../components/CircleBtn';
import {Image} from 'react-native';
import FlowerImg from '../../assets/orange-flower.png';

type Props = {};

const HomeDash = (props: Props) => {
  return (
    <SafeAreaView className="h-screen w-screen bg-themeLightBlue">
      <ScrollView>
        {/* View for whole screen */}
        <View className="flex flex-col w-full min-h-screen  justify-center items-center border border-red-600 py-6 px-6">
          {/* View for avatar, text and report test */}
          <View className="flex w-full justify-center items-center border-4 border-green-600">
            {/* View for avatar*/}
            {/* FIXME: size={72} on avatar does not work for android, might be something with size? idk
            update* it also stopped working for IOS */}
            <View className="self-end border border-black mb-6">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
            </View>
            <Text className="text-3xl font-bold mb-6 text-center">Community {'\n'}Test Lab</Text>
            {/* need giant circle btn, need to refactor circle btn props? */}
            <CircleBtn
              text={`Report \n Test`}
              bgColor="bg-themeLightOrange"
              onPress={() => {
                console.log("You're Sick!!");
              }}
              Btnsize={182}
            //   textSize='3xl'
            />
          </View>

          {/*View for 3 mini buttons*/}
          <View className="w-full border border-black mb-6 flex justify-center flex-row">
            <View className="-mt-2">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
            </View>

            <View className="mt-24">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
            </View>

            <View className="mt-6">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnsize={104}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDash;
