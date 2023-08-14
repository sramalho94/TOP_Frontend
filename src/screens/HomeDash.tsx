import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import CircleBtn from '../components/CircleBtn';
import {useAuth} from '../context/AuthContext';
import HomePageImg from '../../assets/homePageImg.png';
import HomePrivacyImg from '../../assets/homePrivacyImg.png';
import HomeDashboard from '../../assets/homeDashboard.png';
import HomeExchange from '../../assets/homeExchange.png';
import Avatar from '../../assets/Avatar.png';

const HomeDash: React.FC<{navigation: any}> = ({navigation}) => {
  const {onLogout} = useAuth();
  return (
    <SafeAreaView className="h-screen w-screen bg-white">
      <ScrollView>
        {/* View for whole screen */}
        <View className="flex flex-col w-full min-h-screen p-6">
          {/* View for avatar, text and report test */}
          <View className="flex w-full justify-center items-center ">
            {/* View for avatar*/}
            {/* FIXME: size={72} on avatar does not work for android, might be something with size? idk
            update* it also stopped working for IOS */}
            <View className="self-end mb-2 ">
              <CircleBtn
                img={Avatar}
                // bgColor="bg-themeLightOrange"
                // text="Logout"
                onPress={() => {
                  if (onLogout) {
                    onLogout();
                  } else {
                    console.error('onLogout function is not provided');
                  }
                }}
                Btnwidth="w-10"
                Btnheight="h-10"
              />
            </View>
            <Text className="text-3xl font-bold mb-2 text-center">
              Community {'\n'}Test Lab
            </Text>
            {/* need giant circle btn, need to refactor circle btn props? */}
            <CircleBtn
              // text={`Report\nTest`}
              img={HomePageImg}
              // bgColor="bg-themeLightOrange"
              onPress={() => {
                navigation.navigate('AccountReportPage');
              }}
              Btnwidth="w-[182px]"
              Btnheight="h-[182px]"
              // textSize="3xl"
            />
          </View>

          {/*View for 3 mini buttons*/}
          <View className="w-full mb-6 flex justify-center flex-row">
            <View className="-mt-5">
              <CircleBtn
                img={HomePrivacyImg}
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnwidth="w-28"
                Btnheight="h-28"
              />
              {/* <Text className="text-center p-3 text-black text-base">
                Privacy
              </Text> */}
            </View>

            <View className="mt-16">
              <CircleBtn
                img={HomeDashboard}
                onPress={() => navigation.navigate('DataDashboard')}
                Btnwidth="w-28"
                Btnheight="h-28"
              />
              {/* <Text className="text-center p-3 text-black text-base">
                Dashboard
              </Text> */}
            </View>

            <View className="mt-1">
              <CircleBtn img={HomeExchange} Btnwidth="w-28" Btnheight="h-28" />
              {/* <Text className="text-center p-3 text-black text-base">
                Exchange
              </Text> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDash;
