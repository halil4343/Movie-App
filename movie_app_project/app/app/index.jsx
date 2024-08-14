import { Link } from 'expo-router';
import { View, Text } from 'react-native';


export default function HomePage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
      <Link href="/profile.jsx">click here to go profile</Link>
    </View>
  );
}
