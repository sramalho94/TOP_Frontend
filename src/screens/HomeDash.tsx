import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import CircleBtn from '../components/CircleBtn';
import {useAuth} from '../context/AuthContext';
import HomePageImg from '../../assets/homePageImg.png';
import HomePrivacyImg from '../../assets/homePrivacyImg.png';
import HomeDashboard from '../../assets/homeDashboard.png';
import HomeExchange from '../../assets/homeExchange.png';
import Avatar from '../../assets/Avatar.png';
import GroupTopWave from '../../assets/GroupTopWave.png';

const HomeDash: React.FC<{navigation: any}> = ({navigation}) => {
  const {onLogout, usernameVal} = useAuth();
  return (
    <SafeAreaView className="flex-1 h-screen w-screen bg-white">
      {/* <View className="flex-1 flex-col w-full "> */}
      {/* View for avatar, text and report test */}
      <View flex-1 h-screen w-screen>
        <Image source={GroupTopWave} />
      </View>
      <View className="flex w-full justify-center items-center ">
        {/* View for avatar*/}
        {/* FIXME: size={72} on avatar does not work for android, might be something with size? idk
            update* it also stopped working for IOS */}
        <View className="self-end mb-2 ">
          <CircleBtn
            img={Avatar}
            accessLabel="User profile image"
            accessHint="This is a button that displays your profile image."
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
          accessLabel="Report Test Button"
          accessHint="This is a button that you can click on to report your Covid test results."
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
            accessLabel="Privacy"
            accessHint="This button navigates to privacy screen"
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
            accessLabel="Dashboard"
            accessHint="This button navigates to dashboard"
          />
          {/* <Text className="text-center p-3 text-black text-base">
                Dashboard
              </Text> */}
        </View>

        <View className="mt-1">
          <CircleBtn
            img={HomeExchange}
            Btnwidth="w-28"
            Btnheight="h-28"
            accessLabel="Exchange"
            accessHint="This button navigates to data exchange screen"
          />
          {/* <Text className="text-center p-3 text-black text-base">
                Exchange
              </Text> */}
        </View>
      </View>
      {/* </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomeDash;
