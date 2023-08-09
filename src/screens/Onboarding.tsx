import React, { useState, useRef, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import NoImage from './../../assets/nopicture.png';
import ProgressDots from './../components/ProgressDots';
import Button from './../components/Button';
import { RootStackParamList } from '../../App';
type OnboardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

const Onboarding = (props: OnboardingScreenProps) => {
  const { navigation } = props;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { width } = useWindowDimensions();
  const scrollViewRef = useRef<ScrollView>(null);

  const pages = [
    {
      imageSource: NoImage,
      title: 'What the app does and the impact of data',
      buttonText: 'Continue',
      pageIndicator: 1,
      onButtonPress: () => handleSwipeAnimation(1),
    },
    {
      imageSource: NoImage,
      title: 'What the data is used for',
      buttonText: 'Continue',
      pageIndicator: 2,
      onButtonPress: () => handleSwipeAnimation(2),
    },
    {
      imageSource: NoImage,
      title: 'What the data is not used for',
      buttonText: 'Continue',
      pageIndicator: 3,
      onButtonPress: () => navigation.navigate('CreateAccount1'),
    },
  ];

  const swipeAnim = useRef(new Animated.Value(0)).current;

  const handleSwipeAnimation = (page: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: page * width, animated: true });
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
        <SafeAreaView key={index} className="h-screen w-screen items-center bg-red-400 pb-4">
          <View className="flex-1 flex-col mt-4 mb-10">
            <View className="m-5 flex-1">
              <Image className="w-full" source={page.imageSource}></Image>
              <Text className="mx-auto py-5 font-serif text-[22px]">
                {page.title}
              </Text>
            </View>
            <View className="flex-1 flex-col-reverse mb-8">
              <View className="mt-5 mx-5 items-center">
                <Button
                  onPress={page.onButtonPress} // Updated this line
                  innerText={page.buttonText}
                  bgColor="bg-themeBlue"
                  textColor="text-themeWhite"
                  border={true}
                  borderColor="border border-themeBlue border-3"
<<<<<<< HEAD
                  width="full"
=======
                  width="80"
                  accessible={true}
                  accessibilityLabel="Continue"
                  accessibilityHint="Navigates to the next screen"

>>>>>>> 4a2d604ec6e58f1be6f5f5b3a9c7eff22675b49b
                />

                {page.pageIndicator !== pages.length && (
                  <Button
                    onPress={() => navigation.navigate('CreateAccount1')}
                    innerText="Skip"
                    bgColor="bg-white"
                    textColor="text-black"
                    border={false}
                    borderColor="border border-gray"
<<<<<<< HEAD
                    width="full"
=======
                    width="80"
                    accessible={true}
                    accessibilityLabel="Skip"
                    accessibilityHint="Navigates to the create account screen"
>>>>>>> 4a2d604ec6e58f1be6f5f5b3a9c7eff22675b49b
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
