import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import CircleBtn from '../components/CircleBtn';
import {useAuth} from '../context/AuthContext';
import FlowerImg from '../../assets/orange-flower.png';
import CTL from '../../assets/communityTestLab.png';
import Avatar from '../../assets/Avatar.png';

const HomeDash: React.FC<{navigation: any}> = ({navigation}) => {
  const {onLogout, usernameVal} = useAuth();
  return (
    <SafeAreaView className="h-screen w-screen max-w-md self-center">
      <ScrollView>
        
        {/* View for whole screen */}
        <View className="flex flex-col w-full min-h-screen" accessibilityLabel='Home Page' accessibilityHint='The home page for your account. Allows you to submit a Covid Test, view data, privacy, or exchange data for research' accessibilityRole='header'>
          {/* View for avatar, text and report test */}
          <View className="flex w-full justify-center items-center">
            {/* View for avatar*/}
            {/* FIXME: size={72} on avatar does not work for android, might be something with size? idk
            update* it also stopped working for IOS */}
              <Image
              className="w-full h-[200] mb-2 bg-cover bg-center "
              source={CTL}
              />
            <View className="flex flex-row self-start mb-2 pl-5">
              <CircleBtn
                img={Avatar}
                borderColor="border-themeWhite"
                onPress={() => {
                  if (onLogout) {
                    onLogout();
                  } else {
                    console.error('onLogout function is not provided');
                  }
                }}
                Btnwidth="w-20"
                Btnheight="h-20"
                accessLabel='User profile image'
                accessHint='This is a button that displays your profile image.'
              />
              {/* FIXME: Need to dynamically bring in logged in username to display on screen! */}
              <Text
              className='pt-6'>Welcome back, Username{usernameVal}!</Text>
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
              Btnwidth="w-48"
              Btnheight="h-48"
              textSize="text-3xl"
              accessLabel='Report Test Button'
              accessHint='This is a button that you can click on to report your Covid test results.'
            />
            </View>
          </View>

          {/*View for 3 mini buttons*/}
          <View className="w-full mb-6 flex justify-center flex-row">
            <View>
              <CircleBtn
                borderColor='border-themeBlue'
                img={FlowerImg}
                text="Privacy"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnwidth="w-28"
                Btnheight="h-28"
                accessLabel="Privacy"
                accessHint="This button navigates to privacy screen"
              />
            </View>

            <View className="mt-20">
              <CircleBtn
                borderColor='border-themeBlue'
                text='Dashboard'
                img={FlowerImg}
                onPress={() => navigation.navigate('DataDashboard')}
                Btnwidth="w-28"
                Btnheight="h-28"
                accessLabel="Dashboard"
                accessHint="This button navigates to dashboard"
              />
            </View>

            <View>
              <CircleBtn 
              borderColor='border-themeBlue'
              text='Exchange'
              img={FlowerImg} 
              Btnwidth="w-28" 
              Btnheight="h-28"
              accessLabel="Exchange"
              accessHint="This button navigates to data exchange screen" />
            
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDash;
