
import React, { useState, useRef } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  useWindowDimensions,
} from 'react-native';
import { ScrollView } from 'react-native';

import NoImage from './../../assets/nopicture.png';
import ProgressDots from './../components/ProgressDots';
import Button from './../components/Button';
import { NavigationProp } from '@react-navigation/native';


type Props = {
  navigation: NavigationProp<any>;
};

const Onboarding = ({ navigation }: Props) => {
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
      onButtonPress: () => navigation.navigate('LandingPage'),
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
        <SafeAreaView key={index} className="h-screen w-screen">
          <View className="flex-1 flex-col mt-4 mb-25">
            <View className="m-5 flex-1">
              <Image className="w-full" source={page.imageSource}></Image>
              <Text className="mx-auto py-5 font-serif text-[22px]">
                {page.title}
              </Text>
            </View>
            <View className="flex-1 flex-col-reverse mb-3">
              <View className="mt-5">
                <Button
                  onPress={page.onButtonPress} // Updated this line
                  innerText={page.buttonText}
                  bgColor="bg-white"
                  textColor=""
                  border={true}
                  borderColor="border"
                />

                {currentPage !== pages.length && (
                  <Button
                    onPress={() => navigation.navigate('Landing Page')}
                    innerText="Skip"
                    bgColor=""
                    textColor=""
                    border={false}
                    borderColor=""
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
