import React, {useState, useRef, useEffect} from 'react';

import onboardingAll_1 from './../../assets/onboardingAll_1.png';
import onboardingAll_2 from './../../assets/onboardingAll_2.png';
import onboardingAll_3 from './../../assets/onboardingAll_3.png';

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
      imageSource: onboardingAll_1,
      title: 'How your data will be used',
      text: 'Your data will only be shared with public health officials to help them better understand and respond to the spread of diseases in your area.',
      buttonText: 'Continue',
      pageIndicator: 1,
      onButtonPress: () => handleSwipeAnimation(1),
    },
    {
      imageSource: onboardingAll_2,
      title: 'How your data won’t be used',
      text: 'Your privacy matters. Shared data will be encrypted, and never used for advertising or sold to third parties',
      buttonText: 'Continue',
      pageIndicator: 2,
      onButtonPress: () => handleSwipeAnimation(2),
    },
    {
      imageSource: onboardingAll_3,
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
<>
    <ScrollView
      ref={scrollViewRef}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled
      onScroll={handleScroll} // Handle scrolling event
      scrollEventThrottle={16} // Adjust the scroll event frequency
    >
      {pages.map((page, index) => (
        <SafeAreaView key={index} className="h-screen w-screen items-center pb-4">
          
          <View className="flex-1 flex-col max-w-md mb-10">
            <View className="w-screen max-w-md">
              <Image className="w-screen max-w-md h-[500px] max-h-full mb-3 bg-contain bg-center" source={page.imageSource}></Image>
              <Text className="justify-content text-center py-5 font-serif text-[22px]">
                {page.title}
              </Text>
              <Text className="mx-10 pb-5 font-serif text-[14px] text-center leading-5 font-light">
                {page.text}
              </Text>
            </View>

            <View className="flex-1 flex-col-reverse mt-1 ">
              <View className="flex-1 justify-center mt-5 mx-5">
                <View className="m-5">
                  <ProgressDots page={page.pageIndicator} />
                </View>
                <Button
                  onPress={page.onButtonPress}
                  innerText={page.buttonText}
                  bgColor="bg-themeBlue"
                  textColor="text-themeWhite"
                  border={true}
                  borderColor="border border-themeBlue border-3"
                  width="full"
                />

                {page.pageIndicator !== pages.length && (
                  <Button
                    onPress={() => navigation.navigate('CreateAccount1')}
                    innerText="Skip"
                    bgColor="bg-white"
                    textColor="text-black"
                    border={false}
                    borderColor="border border-gray"
                    width="full"
                  />
                )}
              </View>
            </View>
          </View>
          
        </SafeAreaView>
      ))}
      </ScrollView>
    </>
  );
};

export default Onboarding;
