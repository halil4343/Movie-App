import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {icons} from "../constants"
import { useState } from 'react'


const FormField = ({title,value,handleTextChange,otherStyles,placeholder,...props}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="space-y-4">
        <Text className="text-white text-xl font-pregular mt-4">{title}</Text>
        <View className="w-full h-20 px-4 bg-black-100 rounded-2xl border-2 border-black focus:border-secondary flex flex-row items-center">
            <TextInput className="items-center text-white font-pregular flex-1 text-base "
                        onChangeText={handleTextChange}
                        placeholder={placeholder}
                        placeholderTextColor={"#7b7b8b"}
                        secureTextEntry={title==="Password" && !showPassword}
                        {...props}></TextInput>
            {title === "Password" && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image
                    source={!showPassword ? icons.eye:icons.eyeHide}
                    className="w-6 h-6"
                    resizeMode="contain"
                    ></Image>
                </TouchableOpacity>
            )}
        </View>
        </View>
  )
}

export default FormField