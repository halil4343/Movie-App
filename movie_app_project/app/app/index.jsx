import { Link } from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from  "../constants"

const CustomButton = () => {
  return (
    <TouchableOpacity>
      <View>
        <Text>hi</Text>
      </View>
    </TouchableOpacity>
  )
}


export default function index() {
  return (
    <SafeAreaView className = " h-full " style = {{backgroundColor : "#161622"}}>
      <ScrollView contentContainerStyle={{height : "100%"}} >
        <View className={"justify-center items-center w-full h-full px-4"}>
          <Image source={images.logo}
                 className = {"w-[130px] h-[90]"}
          ></Image>
          <Text>Welcome </Text>
          <Link href={"/home"}>go to homepage</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
