import {SafeAreaView, View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import NoImage from './../../assets/nopicture.png';
import ProgressDots from './../components/ProgressDots';
import Button from './../components/Button';
type Props = {};

const Onboarding = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  switch (currentPage) {
    case 1:
      return (
        <SafeAreaView className="h-screen w-screen">
          <View className="flex-1 flex-col mt-4 mb-5">
            {/* image and text */}
            <View className="m-5 flex-1">
              <Image className="w-full" source={NoImage}></Image>
              {/* TODO: maybe? change font style? Wrote font-sans earlier but it didn't change the font*/}
              <Text className="mx-auto py-5 font-serif text-[22px]">
                What the app does and the impact of data
              </Text>
            </View>
            {/* container for dots and buttons */}
            <View className="flex-1 flex-col-reverse mb-3">
              {/* buttons */}
              <View className="mt-5 mx-5">
                <Button
                  onPress={() => setCurrentPage(2)}
                  innerText="Continue"
                  bgColor="bg-white"
                  textColor="text-black"
                  border={true}
                  borderColor="border border-gray"
                />
                <Button
                  onPress={() => console.log('pressed')}
                  innerText="Skip"
                  bgColor="bg-white"
                  textColor="text-black"
                  border={false}
                  borderColor="border border-gray"
                />
              </View>
              {/* progress dots */}
              <ProgressDots page={1} />
            </View>
          </View>
        </SafeAreaView>
      );
    case 2:
      return (
        <SafeAreaView className="h-screen w-screen">
          <View className="flex-1 flex-col mt-4 mb-5">
            {/* image and text */}
            <View className="m-5 flex-1">
              <Image className="w-full" source={NoImage}></Image>
              {/* TODO: maybe? change font style? Wrote font-sans earlier but it didn't change the font*/}
              <Text className="mx-auto py-5 text-[22px]">
                What the data is used for
              </Text>
            </View>
            {/* container for dots and buttons */}
            <View className="flex-1 flex-col-reverse mb-3">
              {/* buttons */}
              <View className="mt-5 mx-5">
                <Button
                  onPress={() => setCurrentPage(3)}
                  innerText="Continue"
                  bgColor="bg-white"
                  textColor="text-black"
                  border={true}
                  borderColor="border border-gray"
                />
                <Button
                  onPress={() => console.log('pressed')}
                  innerText="Skip"
                  bgColor="bg-white"
                  textColor="text-black"
                  border={false}
                  borderColor="border border-gray"
                />
              </View>

              <ProgressDots page={2} />
            </View>
          </View>
        </SafeAreaView>
      );
    case 3:
      return (
        <SafeAreaView className="h-screen w-screen">
          <View className="flex-1 flex-col mt-4 mb-5">
            {/* image and text */}
            <View className="m-5 flex-1">
              <Image className="w-full" source={NoImage}></Image>
              <Text className="mx-auto py-5 text-[22px]">
                What the data is not used for
              </Text>
            </View>
            {/* container for dots and buttons */}
            <View className="flex-1 flex-col-reverse mb-3">
              {/* buttons */}
              <View className="mt-5 mx-5">
                <Button
                  onPress={() => console.log('pressed')}
                  innerText="Continue"
                  bgColor="bg-white"
                  textColor="text-black"
                  border={true}
                  borderColor="border border-gray"
                />
                <Button
                  onPress={() => console.log('pressed')}
                  innerText="Skip"
                  bgColor="bg-white"
                  textColor="text-black"
                  border={false}
                  borderColor="border border-gray"
                />
              </View>
              <ProgressDots page={3} />
            </View>
          </View>
        </SafeAreaView>
      );
    default:
      return null;
  }
};

export default Onboarding;
