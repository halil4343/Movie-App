import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from "../constants/images"

const CustomButton = ({title,handlePress,textStyle}) => {
  return (
    <TouchableOpacity className = "justify-center bg-secondary rounded-xl w-full h-[25px] items-center px-4" onPress={handlePress}
                      props = {{resizeMode: "contain"}}>
    <View> 
      <Text className = "text-primary font-psemibold"
      >{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CustomButton