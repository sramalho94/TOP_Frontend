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
    <SafeAreaView className="h-screen w-screen">
      <ScrollView>
        {/* View for whole screen */}
        <View className="flex flex-col w-full min-h-screen">
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
              />
              {/* FIXME: Need to dynamically bring in logged in username to display on screen! */}
              <Text
              className='pt-6'>Welcome back, Username{usernameVal}!</Text>
            </View>
            {/* need giant circle btn, need to refactor circle btn props? */}
            <CircleBtn
              text={`Report\nTest`}
              bgColor="bg-themeLightOrange"
              onPress={() => {
                navigation.navigate('AccountReportPage');
              }}
              Btnwidth="w-48"
              Btnheight="h-48"
              textSize="3xl"
            />
          </View>

          {/*View for 3 mini buttons*/}
          <View className="w-full mb-6 flex justify-center flex-row">
            <View>
              <CircleBtn
                img={FlowerImg}
                text="Privacy"
                onPress={() => {
                  console.log("You're Sick!!");
                }}
                Btnwidth="w-28"
                Btnheight="h-28"
              />
            </View>

            <View className="mt-20">
              <CircleBtn
                text='Dashboard'
                img={FlowerImg}
                onPress={() => navigation.navigate('DataDashboard')}
                Btnwidth="w-28"
                Btnheight="h-28"
              />
            </View>

            <View>
              <CircleBtn 
              text='Exchange'
              img={FlowerImg} 
              Btnwidth="w-28" 
              Btnheight="h-28" />
            
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeDash;
