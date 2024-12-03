import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";
import CustomButton from '../components/customButton';
import { NativeWindStyleSheet } from "nativewind";
import axios from 'axios';
import connectdb from '../lib/server';

// connectdb();

// Set NativeWind output
NativeWindStyleSheet.setOutput({
  default: "native",
});

// Main component
export default function Index() {
  // State for storing movies
  const [movies, setMovies] = useState([]);

  // Fetch movies from the backend
  useEffect(() => {
    axios
      .get('http://192.168.2.99:3000/movies') // Replace with your backend's IP
      .then(response => {
        console.log('Movies fetched:', response.data);
        setMovies(response.data);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <SafeAreaView className="justify-start items-center bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center w-full h-full justify-start mt-12">
          {/* Logo */}
          <Image 
            source={images.mlogo}
            className="w-[120px] h-[36px]"
          />
          {/* Hero Image */}
          <Image 
            source={images.cards}
            className="w-full h-[380px]"
          />
          {/* Welcome Text */}
          <Text className="text-white m-4 font-pregular text-xl">
            Welcome! We're thrilled to have you here. Explore our features and enjoy 
            a seamless experience designed just for you. Whether you're looking to, 
            we've got you covered. Happy exploring! 🎉
          </Text>
          {/* Continue Button */}
          <CustomButton 
            title={"Continue With Email"} 
            handlePress={() => router.push("/sign-in")} 
            textStyle={"color:#ffffff"} 
            otherStyles={"h-12"}
          />
          {/* Display Movies (if any are loaded) */}
          <View>
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <Text key={index} className="text-white">{movie.title}</Text>
              ))
            ) : (
              <Text className="text-white mt-4">No movies available yet!</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
