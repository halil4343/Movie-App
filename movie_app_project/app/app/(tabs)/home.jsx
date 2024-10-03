import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
    <View>
      <Text>Home</Text>
      <Link href={"/index"}>go to onboarding</Link>
    </View>
    </SafeAreaView>
  )
}

export default Home