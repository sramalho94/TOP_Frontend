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
        <View className="flex flex-col w-full justify-center items-center">
            {/* View for avatar, text and report test */}
          <View className="flex border w-screen border-black justify-center items-center">
              {/* View for avatar*/}
              {/* FIXME: size={72} on avatar does not work for android, might be something with size? idk */}
            <View className="">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                size={125}
              />
            </View>
            {/* need giant title text */}
            <Text className="text-3xl font-bold my-6 ">Community Test Lab</Text>
            {/* need giant circle btn, need to refactor circle btn props? */}
            <CircleBtn
              img={FlowerImg}
              bgColor="bg-themeLightOrange"
              onPress={() => {
                console.log("You're Sick!!");
              }}
              size={182}
            />
          </View>

          {/*View for 3 mini buttons*/}
          <View className='border-8 border-white w-screen flex justify-center items-center flex-row'>
          <CircleBtn
            img={FlowerImg}
            bgColor="bg-themeLightOrange"
            onPress={() => {
              console.log("You're Sick!!");
            }}
            size={104}
          />

          <CircleBtn
            img={FlowerImg}
            bgColor="bg-themeLightOrange"
            onPress={() => {
              console.log("You're Sick!!");
            }}
            size={104}
          />

          <CircleBtn
            img={FlowerImg}
            bgColor="bg-themeLightOrange"
            onPress={() => {
              console.log("You're Sick!!");
            }}
            size={104}
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDash;
