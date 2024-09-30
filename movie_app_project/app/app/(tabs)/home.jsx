import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View className="flex-1 bg-[#161622]">
      <Text>Home</Text>
      <Link href={"index"}>go to onboarding</Link>
    </View>
  )
}

export default Home