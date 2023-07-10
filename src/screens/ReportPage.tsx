import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

type Props = {}

const ReportPage = (props: Props) => {
    return (
        <SafeAreaView className="mx-auto">
            <View className="h-[110] mt-[46]">
                <Text className="text-lg font-bold">Report COVID-19 Test Result</Text>
            </View>
        </SafeAreaView>
    )
}

export default ReportPage