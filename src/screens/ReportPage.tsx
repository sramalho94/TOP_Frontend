import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

type Props = {}

const ReportPage = (props: Props) => {
    return (
        <SafeAreaView className="mx-auto flex justify-center">
            <View className="h-[110] mt-[46]">
                <Text className="text-lg font-bold">Report COVID-19 Test Result</Text>
            </View>
            <View>
                <Text className="text-lg font-bold">What were the results of your test?</Text>
            </View>
        </SafeAreaView>
    )
}

export default ReportPage