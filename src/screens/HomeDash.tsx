import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import CircleBtn from '../components/CircleBtn';

import FlowerImg from '../../assets/orange-flower.png';

const HomeDash: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView className="h-screen w-screen">
      <ScrollView>
        {/* View for whole screen */}
        <View className="flex flex-col w-full min-h-screen p-6">
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
                Btnwidth="w-24"
                Btnheight="h-24"
              />
            </View>
            <Text className="text-3xl font-bold mb-2 text-center">
              Community {'\n'}Test Lab
            </Text>
            {/* need giant circle btn, need to refactor circle btn props? */}
            <CircleBtn
              text={`Report\nTest`}
              bgColor="bg-themeLightOrange"
              onPress={() => {
                navigation.navigate('AccountReportPage');
              }}
              Btnwidth="w-60"
              Btnheight="h-60"
              textSize="3xl"
            />
          </View>
          {/* <Button
            onPress={() => navigation.navigate('ConsentFormThankYou')}
            innerText="Back to ConsentFormThankYou"
            bgColor="bg-themeBlue"
            textColor=""
            border={false}
            borderColor=""
          /> */}

          {/*View for 3 mini buttons*/}
          <View className="w-full mb-6 flex justify-center flex-row">
            <View className="-mt-5">
              <CircleBtn
                img={FlowerImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnwidth="w-28"
                Btnheight="h-28"
              />
              <Text className="text-center p-3 text-black text-base">
                Privacy
              </Text>
            </View>

            <View className="mt-16">
              <CircleBtn
                img={FlowerImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnwidth="w-28"
                Btnheight="h-28"
              />
              <Text className="text-center p-3 text-black text-base">
                Dashboard
              </Text>
            </View>

            <View className="mt-1">
              <CircleBtn
                img={FlowerImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnwidth="w-28"
                Btnheight="h-28"
              />
              <Text className="text-center p-3 text-black text-base">
                Exchange
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDash;
