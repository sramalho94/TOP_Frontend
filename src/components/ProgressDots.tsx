import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useEffect, useState} from 'react'

// what if I made the view circles transparent and on index z 2, and then have a 

type Props = {
  page: number;
}

const ProgressDots = ({page}: Props) => {

  const [dot1, setDot1] = useState<string | undefined> ("bg-black")
  const [dot2, setDot2] = useState<string | undefined> ("bg-gray-300")
  const [dot3, setDot3] = useState<string | undefined> ("bg-gray-300")


  // try to clean up and find a better solution

  useEffect (() => {
    if(page === 2) {
      setDot1("bg-gray-300")
      setDot2("bg-black")
    } else if(page === 3) {
      setDot1("bg-gray-300")
      setDot2("bg-gray-300")
      setDot3("bg-black")
    }

  }, [])

  return (
    <>
      <View className="flex-row justify-center">
          <View className={`rounded-lg ${dot1} w-3 h-3 m-1 `}></View>
          <View className={`rounded-lg ${dot2} w-3 h-3 m-1`}></View>
          <View className={`rounded-lg ${dot3} w-3 h-3 m-1`}></View>
      </View>
     
    </>
  )
}

export default ProgressDots;