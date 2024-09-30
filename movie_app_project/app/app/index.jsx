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
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{height : "100%"}}>
        <View className="items-center flex w-full h-full justify-center px-9 ">
          <Image 
            source={images.logo}
            className = "w-[120px] h-[36px]"
          />
          <Image source = {images.cards} className="w-full h-[364px]"
          ></Image>
          <Text className="text-white m-4 font-pregular">Welcome!

We're thrilled to have you here. Explore our features and enjoy a seamless experience designed just for you. Whether you're looking to , we've got you covered.

If you have any questions, don't hesitate to reach out. Let's get started!

Happy exploring! 🎉 </Text>
          <CustomButton title={"Continue With Email"} handlePress={() => router.push("/sign-in")} textStyle={"color:#ffffff"}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
