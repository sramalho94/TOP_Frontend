import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Button from '../components/Button';
import LandingGroupImg from './../../assets/landingGroupImg.png';

const LandingPage: React.FC<{navigation: any}> = ({navigation}) => {
  // const {colors} = useTheme();
  const theme = useColorScheme();
  return (
    <>
      <SafeAreaView className="flex-1 bg-themeWhite">
        {/* <StatusBar backgroundColor="black" barStyle="dark-content" /> */}
        <StatusBar
          backgroundColor="green"
          barStyle={theme === 'dark' ? 'light-content' : 'default'}
        />
        <ScrollView>
          <Image
            className="w-full h-[500] mb-12 bg-cover bg-center "
            source={LandingGroupImg}
          />

          <View className="mb-3">
            <Button
              onPress={() => navigation.navigate('SignInPage')}
              innerText="Log in"
              bgColor="bg-white"
              textColor="text-themeBlue"
              border={true}
              borderColor="border border-themeBlue border-2"
              width="80"
            />
          </View>
          <View className="mb-2">
            <Button
              onPress={() => navigation.navigate('ReportPage')}
              innerText="Report Without Account"
              bgColor="bg-themeWhite"
              textColor="text-themeBlue"
              border={true}
              borderColor="border border-themeBlue border-2"
              width="80"
            />
          </View>
          <Button
            onPress={() => navigation.navigate('Onboarding')}
            innerText="Create Account"
            bgColor="bg-themeBlue"
            textColor="text-themeWhite"
            border={true}
            borderColor="border border-themeBlue border-2"
            width="80"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LandingPage;
