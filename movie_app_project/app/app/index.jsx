import { Link, router} from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";
import CustomButton from '../components/customButton';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function index() {
  return (
    <SafeAreaView className="justify-start items-center bg-primary">
      <ScrollView contentContainerStyle={{height : "100%"}}>
        <View className="items-center w-full h-full justify-start mt-12">
          <Image 
            source={images.logo}
            className = "w-[120px] h-[36px]"
          />
          <Image source = {images.cards} className="w-full h-[380px]"
          ></Image>
          <Text className="text-white m-4 font-pregular text-xl">Welcome!

We're thrilled to have you here. Explore our features and enjoy a seamless experience designed just for you. Whether you're looking to , we've got you covered.
Happy exploring! 🎉 </Text>
          <CustomButton title={"Continue With Email"} handlePress={() => router.push("/sign-in")} textStyle={"color:#ffffff"} otherStyles={"h-12"}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
