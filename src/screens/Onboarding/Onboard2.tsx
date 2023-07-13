import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import NoImage from '../../../assets/nopicture.png';
import ProgressDots from '../../components/ProgressDots';

const Onboard2 = () => {
  return (
    <>
      <SafeAreaView className="h-screen w-screen">
        <View className="flex-1 flex-col mt-4 mb-3">
          {/* image and text */}
          <View className="m-5 flex-1">
            <Image className="w-full" source={NoImage}></Image>
            {/* TODO: maybe? change font style? Wrote font-sans earlier but it didn't change the font*/}
            <Text className="mx-auto py-5 text-[22px]">
              What the data is used for
            </Text>
          </View>

          {/* container for dots and buttons */}
          <View className="flex-1 flex-col-reverse">
            {/* buttons */}
            <View className="m-5">
              <TouchableOpacity className="rounded border justify-items-center">
                <Text className="text-center py-3 text-[22px]">Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity className="justify-items-center">
                <Text className="text-center py-3 text-[22px]">Skip</Text>
              </TouchableOpacity>
            </View>

            <ProgressDots page={2} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Onboard2;
