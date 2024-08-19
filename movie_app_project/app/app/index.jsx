import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


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
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum </Text>
          <CustomButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
