import {View, Text} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {TouchableOpacity} from 'react-native';
import Onboard1 from './Onboarding/Onboard1';
import Onboard2 from './Onboarding/Onboard2';
import Onboard3 from './Onboarding/Onboard3';
import LandingPage from './LandingPage';
import ReportPage from './ReportPage';

const TestScreen = () => {
  return (
    <View className="min-w-screen min-h-screen justify-center mx-auto">
      <ReportPage />
    </View>
  );
};

export default TestScreen;
