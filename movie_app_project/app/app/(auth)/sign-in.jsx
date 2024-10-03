import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from "../../components/FormField"
import CustomButton from "../../components/customButton"
import {Link} from "expo-router"

const SignIn = () => {

  const[form,setForm] = useState({
    email:"",
    password:""
  })

  const submit = () => {
  }

  const [isSubmitting,setIsSubmitting] = useState(false)


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
      <View className = " justify-center w-full h-full px-6 my-6">
        <Image source={images.mlogo} className="w-[180px] h-[122px]"/> 
        <Text className="text-white text-2xl text-semibold font-pbold mt-6 mb-5">Log in to M-Series</Text>
        <FormField title="Email" value= {form.email} placeholder={"name123@gmail.com"}/>
        <FormField title="Password" value= {form.password}  />
        <CustomButton otherStyles={"mt-5 h-14"}
                      title="Log In"
                      handlePress={submit}
                      isLoading={isSubmitting}
         />
         <View className="pt-4 justify-center flex-row gap-2">
            <Text className="text-white text-xl font-pregular">Don't have an account? </Text>
            <Link href="/sign-up" className="text-xl text-[#ff4000] underline font-pregular">Sign Up</Link>
         </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn