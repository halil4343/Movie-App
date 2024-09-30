import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Redirect } from "expo-router"

const AuthLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen 
        name="sign-in"
        options={{headerShown : false}}
      />
      <Stack.Screen name="sign-up"/>
    </Stack>
    </>
  )
}

export default AuthLayout