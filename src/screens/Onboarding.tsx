import React, {useState, useRef, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding1 from './../../assets/onboarding1.png';
import Onboarding2 from './../../assets/onboarding2.png';
import Onboarding3 from './../../assets/onboarding3.png';
import WaveImage from './../../assets/topWave.png';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  useWindowDimensions,
} from 'react-native';
import {ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ProgressDots from './../components/ProgressDots';
import Button from './../components/Button';
import {RootStackParamList} from '../../App';
type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

const Onboarding = (props: OnboardingScreenProps) => {
  const {navigation} = props;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const {width} = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);

  const pages = [
    {
      imageSource: Onboarding1,
      title: 'How your data will be used',
      text: 'Your data will only be shared with public health officials to help them better understand and respond to the spread of diseases in your area.',
      buttonText: 'Continue',
      pageIndicator: 1,
      onButtonPress: () => handleSwipeAnimation(1),
    },
    {
      imageSource: Onboarding2,
      title: 'How your data won’t be used',
      text: 'Your privacy matters. Shared data will be encrypted, and never used for advertising or sold to third parties',
      buttonText: 'Continue',
      pageIndicator: 2,
      onButtonPress: () => handleSwipeAnimation(2),
    },
    {
      imageSource: Onboarding3,
      title: 'How your data helps',
      text: 'By sharing your data, you play a crucial role in making your community safer and more informeds',
      buttonText: 'Continue',
      pageIndicator: 3,
      onButtonPress: () => navigation.navigate('CreateAccount1'),
    },
  ];

  const swipeAnim = useRef(new Animated.Value(0)).current;

  const handleSwipeAnimation = (page: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: page * width, animated: true});
      setCurrentPage(page);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / width);
    setCurrentPage(page);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEnabled
      onScroll={handleScroll} // Handle scrolling event
      scrollEventThrottle={16} // Adjust the scroll event frequency
    >
      {pages.map((page, index) => (
        <SafeAreaView key={index} className="h-screen w-screen bg-themeWhite">
          <View className="flex-1 flex-col">
            <Image className="absolute bg-cover bg-center" source={WaveImage} />
            <View className="m-5 flex-1">
              <Image
                className="w-[340px] h-[340px]"
                source={page.imageSource}
              />
              <Text className="mx-auto   font-serif text-[25px] text-center">
                {page.title}
              </Text>
              <Text className="mx-auto py-5 font-serif text-[16px] text-center">
                {page.text}
              </Text>
            </View>

            <View className="flex-1 flex-col-reverse mb-1 ">
              <View className="mt-5 mx-5">
                <Button
                  onPress={page.onButtonPress} // Updated this line
                  innerText={page.buttonText}
                  bgColor="bg-themeBlue"
                  textColor="text-themeWhite"
                  border={true}
                  borderColor="border border-themeBlue border-3"
                  width="80"
                />

                {page.pageIndicator !== pages.length && (
                  <Button
                    onPress={() => navigation.navigate('CreateAccount1')}
                    innerText="Skip"
                    bgColor="bg-white"
                    textColor="text-black"
                    border={false}
                    borderColor="border border-gray"
                    width="80"
                  />
                )}
              </View>
              <ProgressDots page={page.pageIndicator} />
            </View>
          </View>
        </SafeAreaView>
      ))}
    </ScrollView>
  );
};

export default Onboarding;
