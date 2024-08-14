import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="Index" options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" options={{ title: 'Profile' }} />
      {/* Add more screens if needed */}
    </Stack>
  );
}
