import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import TopNavBar from '../components/TopNavBar';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';

const ConsentPage: React.FC<{navigation: any}> = ({navigation}) => {



  return (
    <SafeAreaView>
      <ScrollView>
            <Button
                onPress={() => navigation.navigate('ConsentPage')}
                innerText="Go to consent page!"
                textColor=""
                bgColor=""
                border={true}
            ></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsentPage;
