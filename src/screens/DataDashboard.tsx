import {WebView} from 'react-native-webview';
import React from 'react';
import {View} from 'react-native'

interface DataDashboardProps {}

const DataDashboard: React.FC<DataDashboardProps> = props => (
  <View accessibilityLabel='Data Dashboard Page' accessibilityHint='Shows Covid data and trends from each state and across the US' accessibilityRole='header'>
  <WebView
    source={{
      uri: 'https://public.tableau.com/views/COVIDDashboard1_6/COVIDDBTester?:language=en-US&:display_count=n&:origin=viz_share_link',
    }}
  />
  </View>
);

export default DataDashboard;
