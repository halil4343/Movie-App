import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{uri: 'https://picsum.photos/1024/768?yellow'}}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen....</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Image 
        fadeDuration={1500}
          source={{ uri: 'https://picsum.photos/200/300' }} 
          style={styles.image} 
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the whole container
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background to make text readable
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
  },
});
