import { View, Text } from 'react-native'
import React from 'react'



const ProgressDots = () => {
  return (
      <View className="flex-row justify-center">
          <View className="rounded-lg bg-black w-3 h-3 m-1"></View>
          <View className="rounded-lg bg-gray-300 w-3 h-3 m-1"></View>
          <View className="rounded-lg bg-gray-300 w-3 h-3 m-1"></View>
      </View>
  )
}

export default ProgressDots;