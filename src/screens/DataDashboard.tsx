import { WebView } from 'react-native-webview'
import React from 'react';

interface DataDashboardProps {

}

const DataDashboard: React.FC<DataDashboardProps> = (props) => (
  <WebView
    url="https://public.tableau.com/views/COVIDDashboard1_6/COVIDDBTester?:language=en-US&:display_count=n&:origin=viz_share_link"
  />
);

export default DataDashboard