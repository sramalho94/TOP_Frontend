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
        <View className="flex flex-col w-full min-h-screen justify-center items-center border border-red-600 px-6">
          {/* View for avatar, text and report test */}
          <View className="flex w-full justify-center items-center border-4 border-green-600">
            
            {/* View for avatar*/}
            <View className="self-end mb-6">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => console.log("the avatar: master of all four elements")}
                Btnsize="72"
              />
            </View>
            <Text className="text-5xl font-bold mb-6 text-center text-black">Community {'\n'}Test Lab</Text>
            
            {/* Giant Report Button */}
            <CircleBtn
              text={`Report \n Test`}
              bgColor="bg-themeLightOrange"
              onPress={() => console.log("reported test")
              }
              Btnsize="182"
              textSize='3xl'
            />
          </View>

          {/*View for 3 mini buttons*/}
          <View className="w-full border border-black mb-6 flex justify-center flex-row">
            
            {/* Privacy */}
            <View className="-mt-2">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => console.log("privacy")}
                Btnsize="104"
              />
              <Text className="text-center p-3 text-black text-base">Privacy</Text>
            </View>

            {/* Dashboard */}
            <View className="mt-24">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => console.log("dashboard")}
                Btnsize="104"
              />
              <Text className="text-center p-3 text-black text-base">Dashboard</Text>
            </View>
            
            {/* Exchange */}
            <View className="mt-6">
              <CircleBtn
                img={FlowerImg}
                bgColor="bg-themeLightOrange"
                onPress={() => console.log("exchange")}
                Btnsize="104"
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
