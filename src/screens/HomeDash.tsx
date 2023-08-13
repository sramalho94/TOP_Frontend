import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import CircleBtn from '../components/CircleBtn';
import {useAuth} from '../context/AuthContext';
import FlowerImg from '../../assets/orange-flower.png';

const HomeDash: React.FC<{navigation: any}> = ({navigation}) => {
  const {onLogout, usernameVal} = useAuth();
  return (
    <SafeAreaView className="h-screen w-screen max-w-md self-center">
      <ScrollView>
        
        {/* View for whole screen */}
        <View className="flex flex-col w-full min-h-screen p-6" accessibilityLabel='Home Page' accessibilityHint='The home page for your account. Allows you to submit a Covid Test, view data, privacy, or exchange data for research' accessibilityRole='header'>
         
          {/* View for avatar, text and report test */}
          <View className="flex w-full justify-center items-center ">
            
            {/* View for avatar*/}
            <View className="self-end mb-2">
              <CircleBtn
                borderColor='border-themeBlue'
                img={FlowerImg}
                bgColor="bg-themeWhite"
                text="Logout"
                onPress={() => {
                  if (onLogout) {
                    onLogout();
                  } else {
                    console.error('onLogout function is not provided');
                  }
                }}
                Btnwidth="w-24"
                Btnheight="h-24"
                accessLabel='User profile image'
                accessHint='This is a button that displays your profile image.'
              />
            </View>
            <View className="self-start">
              {/* // TODO: Add a potrait image here!!!! */}
              <Text className="color-black text-lg">
                Welcome back, {usernameVal}!
              </Text>
            </View>
            {/* need giant circle btn, need to refactor circle btn props? */}
          <View className="mt-10">
            <CircleBtn
              borderColor='border-themeBlue'
              text={`Report\nTest`}
              bgColor="bg-themeLightOrange"
              onPress={() => {
                navigation.navigate('AccountReportPage');
              }}
              Btnwidth="w-60"
              Btnheight="h-60"
              textSize="text-3xl"
              accessLabel='Report Test Button'
              accessHint='This is a button that you can click on to report your Covid test results.'
            />
            </View>
          </View>

          {/*View for 3 mini buttons*/}
          <View className="w-full mb-6 flex justify-center flex-row">
            <View className="-mt-5">
              <CircleBtn
                borderColor='border-themeBlue'
                img={FlowerImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnwidth="w-28"
                Btnheight="h-28"
                accessLabel="Privacy"
                accessHint="This button navigates to privacy screen"
              />
              <Text className="text-center p-3 text-black text-base">
                Privacy
              </Text>
            </View>

            <View className="mt-16">
              <CircleBtn
                borderColor='border-themeBlue'
                img={FlowerImg}
                onPress={() => navigation.navigate('DataDashboard')}
                Btnwidth="w-28"
                Btnheight="h-28"
                accessLabel="Dashboard"
                accessHint="This button navigates to dashboard"
              />
              <Text className="text-center p-3 text-black text-base">
                Dashboard
              </Text>
            </View>

            <View className="mt-1">
              <CircleBtn
                borderColor='border-themeBlue'
                img={FlowerImg}
                Btnwidth="w-28"
                Btnheight="h-28"
                accessLabel="Exchange"
                accessHint="This button navigates to data exchange screen" />
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
