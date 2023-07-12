import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useEffect, useState} from 'react'

// what if I made the view circles transparent and on index z 2, and then have a 

type Props = {
  page: number;
}

const ProgressDots = ({page}: Props) => {


  useEffect (() => {

  }, [page])

  return (
    <>
      <View className="flex-row justify-center">
          <View className={`rounded-lg ${page === 1 ? "bg-black" : "bg-gray-300" } w-3 h-3 m-1 `}></View>
          <View className={`rounded-lg ${page === 2 ? "bg-black" : "bg-gray-300" } w-3 h-3 m-1`}></View>
          <View className={`rounded-lg ${page === 3 ? "bg-black" : "bg-gray-300" } w-3 h-3 m-1`}></View>
      </View>
     
    </>
  )
}

export default ProgressDots;